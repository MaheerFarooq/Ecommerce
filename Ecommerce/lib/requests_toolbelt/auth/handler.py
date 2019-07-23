import hashlib
import time

import webapp2
from webapp2_extras import sessions
import jinja2
import os
from google.appengine.api import images
from models.Pictures import Image
from google.appengine.ext import ndb
from models.Users import Users
from models.LoginHistory import LoginHistory

HISTORY_PARENT_KEY = ndb.Key("Entity", "history_root")


class BaseHandler(webapp2.RequestHandler):
    def check_password(self, hashed_password, user_password):
        password, salt = hashed_password.split(':')
        return password == hashlib.sha256(salt.encode() + user_password.encode()).hexdigest()

    def set_profile_image(self, user_id):
        profile_image = Image.query(ndb.AND(Image.reference_key == user_id, Image.image_type == 1)).order(-Image.image_creation_date).get()
        if profile_image:
            self.session['Profile_url'] = images.get_serving_url(profile_image.image_key) + "=s100-c"
        else:
            self.session['Profile_url'] = None

    def get_profile_image(self):
        primary_image = Image.query(ndb.AND(Image.reference_key == self.session.get('user_id'), Image.active == True)).order(-Image.image_creation_date).get()
        if primary_image is not None:
            return images.get_serving_url(primary_image.image_key)
        else:
            return None

    def write(self, *a, **kw):
        self.response.out.write(*a, **kw)

    def dispatch(self):
        # Get a session store for this request.
        self.session_store = sessions.get_store(request=self.request)

        if not self.session.get("email"):
            cookie = self.request.cookies.get('remember_me2')
            if cookie:
                chashed, cemail, key = cookie.split("&")
                result = self.check_password(chashed, cemail)
                if result:
                    query = Users.query(Users.email == cemail)
                    user = query.get()
                    if user:
                        self.set_profile_image(user.key.urlsafe())
                        check_cookie = LoginHistory.query(ndb.AND(LoginHistory.user_id == user.key.urlsafe(), LoginHistory.cookie_key == key), ancestor=HISTORY_PARENT_KEY).get()
                        if check_cookie:
                            self.session['email'] = cemail
                            self.session['name'] = user.first_name.title() + " " + user.last_name.title()
                            self.session['first_name'] = user.first_name.title()
                            self.session['user_id'] = user.key.urlsafe()
                            self.session['register_type'] = user.register_type
                            self.session['Profile_url'] = self.get_profile_image()
                            check_cookie.last_active = time.time()
                            check_cookie.put()

        unauthorized_routes = ["/", "/log-in", "/sign-up", "/help", "/teach", "social-login", "/reset-password", "/reset-password-email"]
        if self.request.path in unauthorized_routes:
            print(self.request.path)
        else:
            if not self.session.get("email"):
                self.redirect('/log-in')

        try:
            # Dispatch the request.
            webapp2.RequestHandler.dispatch(self)

        finally:
            # Save all sessions.
            self.session_store.save_sessions(self.response)

    @webapp2.cached_property
    def session(self):
        # Returns a session using the default cookie key.
        return self.session_store.get_session()

    @property
    def jinja_environment(self):
        jinja_environment = jinja2.Environment(
            loader=jinja2.FileSystemLoader(
                os.path.join(os.path.dirname(__file__),
                             '../templates'
                             ))
        )
        jinja_environment.globals['session'] = self.session
        return jinja_environment