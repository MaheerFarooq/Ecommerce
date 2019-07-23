from google.appengine.ext import ndb


class Blog(ndb.Model):
    content = ndb.TextProperty()
    user_id = ndb.StringProperty()
    subcategory = ndb.StringProperty()
    category = ndb.StringProperty()
    title = ndb.StringProperty(required=True)
    creation_date = ndb.DateTimeProperty(auto_now_add=True)
    last_update_date = ndb.DateTimeProperty(auto_now_add=True)
    active = ndb.BooleanProperty(default=True)
    qa_action_date = ndb.DateTimeProperty()
    qa_status = ndb.IntegerProperty(default=0)
    is_finalized = ndb.BooleanProperty(default=False)
    firebase_key = ndb.StringProperty()
    comment_status = ndb.IntegerProperty(default=1)


'''
qa_status: 0 => not approved
qa_status: 1 => approved
qa_status: 2 => rejected

'''
