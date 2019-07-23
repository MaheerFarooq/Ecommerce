from google.appengine.ext import ndb


class UserCancelledAccount(ndb.Model):
    user_id = ndb.StringProperty()
    reason = ndb.StringProperty()
    detail = ndb.StringProperty()
    contact_for_detail = ndb.StringProperty()
    added_date_time = ndb.DateTimeProperty(auto_now_add=True)
