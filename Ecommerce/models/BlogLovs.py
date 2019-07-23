from google.appengine.ext import ndb


class CategorySubcategory(ndb.Model):
    type = ndb.IntegerProperty(default=1)
    description = ndb.StringProperty()
    parent_id = ndb.StringProperty(default='')
    creation_date = ndb.DateTimeProperty(auto_now_add=True)
    active = ndb.BooleanProperty(default=True)


'''
type => 1:category
type => 2:Subcategory


'''
