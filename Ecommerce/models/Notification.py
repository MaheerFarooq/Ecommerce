from google.appengine.ext import ndb
import json

NOTIFICATION_PARENT_KEY = ndb.Key("Notification", "notification_root")


class Notification(ndb.Model):
    user_id = ndb.StringProperty(repeated=True)
    title = ndb.StringProperty()
    icon = ndb.StringProperty()
    notification_image = ndb.StringProperty()
    detail = ndb.StringProperty()
    user_action = ndb.StringProperty(default='#')
    mark_read = ndb.BooleanProperty(default=False)
    active = ndb.BooleanProperty(default=True)
    created_date = ndb.DateTimeProperty(auto_now_add=True)

    @classmethod
    def create(cls, params):
        """
        create a new entity
        :param params: include dict of all parameters
        :return: notification object
        """
        notification = cls(user_id=[params['user_id']],
                           title=params['title'],
                           icon=params['icon'],
                           detail=params['details'],
                           user_action=params['user_action'],
                           notification_image=params['notification_image']
                           , parent=NOTIFICATION_PARENT_KEY)
        notification.put()
        return notification

    @classmethod
    def get_notifications_by_user_id(cls, user_id):
        notifications = cls.query(
            ndb.AND(
                cls.user_id == user_id,
                cls.active == True,
                cls.mark_read == False
            ),
            ancestor=NOTIFICATION_PARENT_KEY
        )
        return notifications.fetch()
