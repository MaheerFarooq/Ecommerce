from google.appengine.ext import ndb
import time


class SecurityHistory(ndb.Model):
    user_id = ndb.StringProperty()
    type = ndb.IntegerProperty()
    created_date = ndb.DateTimeProperty(auto_now_add=True)

    # 1 password
    # 2 email
    # 3 google
    # 4 facebook

    @classmethod
    def add_update_history(cls, user_id, type, parent_key):
        history = cls(user_id=user_id,
                      type=type,
                      parent=parent_key)
        history.put()
        return history

    @classmethod
    def get_last_updated(cls, self, type, SECURITY_HISTORY_KEY):
        return cls.query(ndb.AND(cls.user_id == self.session.get('user_id'), cls.type == type),
                         ancestor=SECURITY_HISTORY_KEY).order(-cls.created_date).get()
