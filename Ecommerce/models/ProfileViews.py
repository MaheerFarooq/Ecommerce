from google.appengine.ext import ndb


class ProfileViews(ndb.Model):
    user_id = ndb.StringProperty()
    host = ndb.StringProperty()
    user_agent = ndb.StringProperty()
    created_date = ndb.DateTimeProperty(auto_now_add=True)
