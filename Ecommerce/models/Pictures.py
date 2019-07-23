from google.appengine.ext import ndb


# 1=> profile pictures
# 2=> listing pictures


class Image(ndb.Model):
    image_key = ndb.BlobKeyProperty()
    caption = ndb.StringProperty()
    reference_key = ndb.StringProperty()
    serving_url = ndb.StringProperty()
    image_type = ndb.IntegerProperty()
    cover_flag = ndb.BooleanProperty(default=False)
    image_creation_date = ndb.DateTimeProperty(auto_now_add=True)
    active = ndb.BooleanProperty()

    '''
    image_type -> 1 -> profile images
    image_type -> 2 -> listing
    image_type -> 3 -> blog
    image_type -> 4 -> 
    
    
    reference key -> serve as a foreign key like the key of profile or key of listing
    
     
    '''
