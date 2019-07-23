from google.appengine.ext import ndb
import time


class LoginHistory(ndb.Model):
    user_id = ndb.StringProperty()
    host = ndb.StringProperty()
    user_agent = ndb.StringProperty()
    cookie_key = ndb.StringProperty()
    last_active = ndb.FloatProperty()
    created_date = ndb.DateTimeProperty(auto_now_add=True)

    @classmethod
    def add_login_history(cls, user_id, host, user_agent, cookie_key, parent_key):
        history = cls(user_id=user_id,
                      host=host,
                      user_agent=user_agent,
                      cookie_key=cookie_key,
                      last_active=time.time(),
                      parent=parent_key)
        history.put()
        return history

    @classmethod
    def get_history(cls, self, HISTORY_PARENT_KEY):
        return cls.query(cls.user_id == self.session.get('user_id'),
                                           ancestor=HISTORY_PARENT_KEY).order(-cls.created_date)
