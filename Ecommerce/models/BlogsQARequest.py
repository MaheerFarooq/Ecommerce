from google.appengine.ext import ndb


class BlogsQaRequests(ndb.Model):
    status = ndb.IntegerProperty(default=0)
    user_id = ndb.StringProperty()
    created_date = ndb.DateTimeProperty(auto_now_add=True)


'''
0=> not approved yet
1=> approved
2=> rejected


'''