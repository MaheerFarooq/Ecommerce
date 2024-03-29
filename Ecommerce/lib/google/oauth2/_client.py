# Copyright 2016 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""OAuth 2.0 client.

This is a client for interacting with an OAuth 2.0 authorization server's
token endpoint.

For more information about the token endpoint, see
`Section 3.1 of rfc6749`_

.. _Section 3.1 of rfc6749: https://tools.ietf.org/html/rfc6749#section-3.2
"""

import datetime
import json

from six.moves import http_client
from six.moves import urllib

from lib.google.auth import _helpers
from lib.google.auth import exceptions

_URLENCODED_CONTENT_TYPE = 'application/x-www-form-urlencoded'
_JWT_GRANT_TYPE = 'urn:ietf:params:oauth:grant-type:jwt-bearer'
_REFRESH_GRANT_TYPE = 'refresh_token'


def _handle_error_response(response_body):
    """"Translates an error response into an exception.

    Args:
        response_body (str): The decoded response data.

    Raises:
        google.auth.exceptions.RefreshError
    """
    try:
        error_data = json.loads(response_body)
        error_details = '{}: {}'.format(
            error_data['error'],
            error_data.get('error_description'))
    # If no details could be extracted, use the response data.
    except (KeyError, ValueError):
        error_details = response_body

    raise exceptions.RefreshError(
        error_details, response_body)


def _parse_expiry(response_data):
    """Parses the expiry field from a response into a datetime.

    Args:
        response_data (Mapping): The JSON-parsed response data.

    Returns:
        Optional[datetime]: The expiration or ``None`` if no expiration was
            specified.
    """
    expires_in = response_data.get('expires_in', None)

    if expires_in is not None:
        return _helpers.utcnow() + datetime.timedelta(
            seconds=expires_in)
    else:
        return None


def _token_endpoint_request(request, token_uri, body):
    """Makes a request to the OAuth 2.0 authorization server's token endpoint.

    Args:
        request (google.auth.transport.Request): A callable used to make
            HTTP requests.
        token_uri (str): The OAuth 2.0 authorizations server's token endpoint
            URI.
        body (Mapping[str, str]): The parameters to send in the request body.

    Returns:
        Mapping[str, str]: The JSON-decoded response data.

    Raises:
        google.auth.exceptions.RefreshError: If the token endpoint returned
            an error.
    """
    body = urllib.parse.urlencode(body)
    headers = {
        'content-type': _URLENCODED_CONTENT_TYPE,
    }

    response = request(
        method='POST', url=token_uri, headers=headers, body=body)

    response_body = response.data.decode('utf-8')

    if response.status != http_client.OK:
        _handle_error_response(response_body)

    response_data = json.loads(response_body)

    return response_data


def jwt_grant(request, token_uri, assertion):
    """Implements the JWT Profile for OAuth 2.0 Authorization Grants.

    For more details, see `rfc7523 section 4`_.

    Args:
        request (google.auth.transport.Request): A callable used to make
            HTTP requests.
        token_uri (str): The OAuth 2.0 authorizations server's token endpoint
            URI.
        assertion (str): The OAuth 2.0 assertion.

    Returns:
        Tuple[str, Optional[datetime], Mapping[str, str]]: The access token,
            expiration, and additional data returned by the token endpoint.

    Raises:
        google.auth.exceptions.RefreshError: If the token endpoint returned
            an error.

    .. _rfc7523 section 4: https://tools.ietf.org/html/rfc7523#section-4
    """
    body = {
        'assertion': assertion,
        'grant_type': _JWT_GRANT_TYPE,
    }

    response_data = _token_endpoint_request(request, token_uri, body)

    try:
        access_token = response_data['access_token']
    except KeyError:
        raise exceptions.RefreshError(
            'No access token in response.', response_data)

    expiry = _parse_expiry(response_data)

    return access_token, expiry, response_data


def refresh_grant(request, token_uri, refresh_token, client_id, client_secret):
    """Implements the OAuth 2.0 refresh token grant.

    For more details, see `rfc678 section 6`_.

    Args:
        request (google.auth.transport.Request): A callable used to make
            HTTP requests.
        token_uri (str): The OAuth 2.0 authorizations server's token endpoint
            URI.
        refresh_token (str): The refresh token to use to get a new access
            token.
        client_id (str): The OAuth 2.0 application's client ID.
        client_secret (str): The Oauth 2.0 appliaction's client secret.

    Returns:
        Tuple[str, Optional[str], Optional[datetime], Mapping[str, str]]: The
            access token, new refresh token, expiration, and additional data
            returned by the token endpoint.

    Raises:
        google.auth.exceptions.RefreshError: If the token endpoint returned
            an error.

    .. _rfc6748 section 6: https://tools.ietf.org/html/rfc6749#section-6
    """
    body = {
        'grant_type': _REFRESH_GRANT_TYPE,
        'client_id': client_id,
        'client_secret': client_secret,
        'refresh_token': refresh_token,
    }

    response_data = _token_endpoint_request(request, token_uri, body)

    try:
        access_token = response_data['access_token']
    except KeyError:
        raise exceptions.RefreshError(
            'No access token in response.', response_data)

    refresh_token = response_data.get('refresh_token', refresh_token)
    expiry = _parse_expiry(response_data)

    return access_token, refresh_token, expiry, response_data
