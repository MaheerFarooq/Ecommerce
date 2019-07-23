from google.appengine.ext import ndb

USER_ADDITIONAL_FIELDS = ndb.Key("Entity", "user_additional_fields_root")
user_privacy_settings = {
    'birthday': 'Public',
    'work_history': 'Public',
    'education': 'Public',
    'skills': 'Public',
    'places': 'Public',
    'about_me': 'Public'
}


class UserAdditionalFields(ndb.Model):
    user_id = ndb.StringProperty()
    tag_line = ndb.StringProperty()
    introduction = ndb.StringProperty()
    current_place = ndb.StringProperty()
    previous_places = ndb.StringProperty()
    user_privacy_object = ndb.JsonProperty(default=user_privacy_settings)

    @classmethod
    def get_record(cls, request, session):
        user_additional_info = cls.query(cls.user_id == session.get('user_id'), ancestor=USER_ADDITIONAL_FIELDS).get()
        if not user_additional_info:
            user_additional_info = cls(parent=USER_ADDITIONAL_FIELDS)
        return user_additional_info

    @classmethod
    def add_user_introduction(cls, request, session):
        user_additional_info = cls.get_record(request, session)
        user_additional_info.introduction = request.get('introduction')
        user_additional_info.tag_line = request.get('tagline')
        user_additional_info.user_id = session.get('user_id')

        user_additional_info.put()
        return user_additional_info

    @classmethod
    def add_user_places(cls, request, session):
        user_additional_info = cls.get_record(request, session)
        user_additional_info.current_place = request.get('current-place')
        user_additional_info.previous_places = request.get('previous-places')
        user_additional_info.user_id = session.get('user_id')

        user_additional_info.put()
        return user_additional_info

    @classmethod
    def get_user_additional_fields(cls, user_id):
        addition_fields = cls.query(cls.user_id == user_id, ancestor=USER_ADDITIONAL_FIELDS).get()
        if addition_fields:
            return addition_fields
        else:
            return {'user_privacy_object': user_privacy_settings}

    @classmethod
    def manipulate_privacy(cls, request, session):
        user_additional_info = cls.get_record(request, session)
        user_additional_info.user_privacy_object[request.get('profile-section')] = request.get('selected-option')
        user_additional_info.put()
        return user_additional_info
