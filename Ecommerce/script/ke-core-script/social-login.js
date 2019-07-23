var fb_check = 0;
window.fbAsyncInit = function () {
    // FB JavaScript SDK configuration and setup
    FB.init({
        appId: facebookAppId, // FB App ID
        cookie: true,  // enable cookies to allow the server to access the session
        xfbml: true,  // parse social plugins on this page
        version: 'v2.8' // use graph api version 2.8
    });

    // Check whether the user already logged in
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected' && fb_check === 1) {
            //display user data
            getFbUserData();
        }
    });
};

// Load the JavaScript SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Facebook login with JavaScript SDK
function fbLogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            fb_check = 1;
            // Get and display the user profile data
            getFbUserData();
        } else {
            document.getElementById('status').innerHTML = 'User cancelled login or did not fully authorize.';
        }
    }, {scope: 'email'});
}

// Fetch the user profile data from facebook
function getFbUserData() {
    FB.api('/me', {locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture'},
        function (response) {
            $("#id").val(response.id);
            $("#first_name").val(response.first_name);
            $("#last_name").val(response.last_name);
            $("#email").val(response.email);
            $("#fb_login").submit();
        });
}

// Logout from facebook
function fbLogout() {
    FB.logout(function () {
        document.getElementById('fbLink').setAttribute("onclick", "fbLogin()");
        document.getElementById('fbLink').innerHTML = '<img src="fblogin.png"/>';
        document.getElementById('userData').innerHTML = '';
        document.getElementById('status').innerHTML = 'You have successfully logout from Facebook.';
    });
}

function onLoadGoogleCallback() {
    gapi.load('auth2', function () {
        auth2 = gapi.auth2.init({
            client_id: googleClientId,
            cookiepolicy: 'single_host_origin',
            scope: 'profile'
        });
        auth2.attachClickHandler(element, {},
            function (googleUser) {
                name = googleUser.getBasicProfile().getName();
                names = name.split(" ");
                $("#g_first_name").val(names[0]);
                $("#g_last_name").val(names[1]);
                $("#g_email").val(googleUser.getBasicProfile().getEmail());
                $("#g_id").val(googleUser.getBasicProfile().getId());
                $("#google_login").submit();
            }, function (error) {
                console.log('Sign-in error', error);
            }
        );
    });
    element = document.getElementById('app-link-kompass-log-in-google');
}