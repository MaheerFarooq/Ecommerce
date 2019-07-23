from google.appengine.ext import ndb


class UsersVat(ndb.Model):
    user_id = ndb.StringProperty()
    member_state = ndb.StringProperty()
    vat_number = ndb.StringProperty()
    name_registration = ndb.StringProperty()
    address_one = ndb.StringProperty()
    address_two = ndb.StringProperty()
    city = ndb.StringProperty()
    province_region = ndb.StringProperty()
    zip_code = ndb.StringProperty()
    added_date_time = ndb.DateTimeProperty(auto_now_add=True)
