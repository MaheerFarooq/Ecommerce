from google.appengine.ext import ndb


class Users(ndb.Model):
    first_name = ndb.StringProperty()
    last_name = ndb.StringProperty()
    phone_number = ndb.StringProperty()
    gender = ndb.StringProperty()
    date_of_birth = ndb.StringProperty()
    about = ndb.StringProperty()
    address = ndb.StringProperty()
    skill = ndb.StringProperty()
    website = ndb.StringProperty()
    timezone = ndb.StringProperty()
    language = ndb.StringProperty()
    currency = ndb.StringProperty()
    privacy = ndb.IntegerProperty(default=1)
    emergency_name = ndb.StringProperty()
    emergency_email = ndb.StringProperty()
    emergency_contact = ndb.StringProperty()
    relation = ndb.StringProperty()
    email = ndb.StringProperty()
    terms_conditions = ndb.IntegerProperty()
    password = ndb.StringProperty()
    register_type = ndb.IntegerProperty()
    remember_key = ndb.StringProperty()
    verification_key = ndb.StringProperty()
    verification_status = ndb.IntegerProperty()
    date = ndb.StringProperty()
    activation_status = ndb.IntegerProperty()
    news_letter_subscription = ndb.StringProperty()
    facebook_verified = ndb.IntegerProperty(default=0)
    google_verified = ndb.IntegerProperty(default=0)
    firebase_uid = ndb.StringProperty()
    firebase_password = ndb.StringProperty()
    firebase_key = ndb.StringProperty()
    slug = ndb.StringProperty()
    user_type = ndb.IntegerProperty(repeated=True)
    added_date_time = ndb.DateTimeProperty(auto_now_add=True)

    @classmethod
    def update_profile(cls, args):
        user = cls.query(cls.email == args['email'], ancestor=args['USER_PARENT_KEY']).get()
        user.first_name = args['first_name']
        user.last_name = args['last_name']
        user.phone_number = args['phone_number']
        user.gender = args['gender']
        user.date_of_birth = args['date_of_birth']
        user.country = args['country']
        user.city = args['city']
        user.zip_code = args['zip_code']
        user.emergency_name = args['emergency_name']
        user.emergency_contact = args['emergency_contact']
        user.emergency_email = args['emergency_email']
        user.relation = args['relation']
        user.address = args['address']

        user.put()
        return user

    @classmethod
    def get_user(cls, self, USER_PARENT_KEY):
        return cls.query(cls.email == self.session.get('email'), ancestor=USER_PARENT_KEY).get()

    @classmethod
    def get_user_by_key(cls, self):
        return ndb.Key(urlsafe=self.session.get('user_id')).get()

    @classmethod
    def verify_email(cls, key, id):
        user = ndb.Key(urlsafe=key).get()
        if user:
            if user.verification_key == id:
                user.verification_key = ''
                user.verification_status = 1
                user.put()
                return True

        return False



'''

user_type => 1 => normal user
user_type => 11 => Blog writer
user_type => 12 => Bolg QA
user_type => 13 => Bolg Admin
'''
