# --------------------------------------------------------
# Python imports

import json
import pdb
import lib.timeago, datetime
from lib.dateutil import parser as date_parser
import hashlib
from datetime import timedelta
import ast
import uuid
import copy
import time
import urllib
import sys
import re
import random
import string
import os
import socket
# --------------------------------------------------------
# Handlers

from Handlers import BaseHandler


# ---------------------------------------------------------
# Google app engine

from google.appengine.api import images
from google.appengine.api import search
from google.appengine.ext import ndb
from google.appengine.ext.blobstore import BlobKey
from google.appengine.ext.webapp import blobstore_handlers
from google.appengine.ext import blobstore
from google.appengine.api import mail
import webapp2
from google.appengine.api import search

# Libraries
import lib.sendgrid
from lib.sendgrid.helpers.mail import *
from webapp2_extras import sessions
from lib.firebase_admin import db
from lib.firebase_admin import credentials
from lib import pytz
from lib.pytz import timezone
# -----------------------------------------------------------
# Models

from models.Users import Users
from models.LoginHistory import LoginHistory
from models.Pictures import Image
from models.UsersVat import UsersVat
from models.UserWorkAndEducation import UserWorkDetail, UserCollegeDetail, UserProfessionalSkill
from models.ProfileViews import ProfileViews
from models.BlogsQARequest import BlogsQaRequests
from models.BlogLovs import CategorySubcategory
from models.Blog import Blog as WriteBlog
from models.Notification import Notification

# Parent Keys
USER_PARENT_KEY = ndb.Key("Entity", "user_root")
CALENDAR_PARENT_KEY = ndb.Key("Entity", "calendar_root")
VAT_PARENT_KEY = ndb.Key("Entity", "vat_root")
HISTORY_PARENT_KEY = ndb.Key("Entity", "history_root")
CARD_PARENT_KEY = ndb.Key("Entity", "card_root")
PICTURE_PARENT_KEY = ndb.Key("Entity", "pictures_root")
LISTING_PARENT_KEY = ndb.Key("Entity", "listing_root")
BOOKING_PARENT_KEY = ndb.Key("Entity", "booking_root")
USER_EDUCATION_KEY = ndb.Key("Entity", "education_root")
USER_WORK_KEY = ndb.Key("Entity", "work_root")
USER_SKILL_KEY = ndb.Key("Entity", "skill_root")
USER_CALENDER_KEY = ndb.Key("Entity", "Calender_root")
CLASSROOM_CARD_KEY = ndb.Key("Entity", "classroom_card_root")
CLASSROOM_KEY = ndb.Key("Entity", "classroom_root")
CLASSROOM_ANNOUNCEMENT_KEY = ndb.Key("Entity", "classroom_announcement_root")
CLASSROOM_LINK_KEY = ndb.Key("Entity", "classroom_link_root")
CLASSROOM_ATTACHMENT_KEY = ndb.Key("Entity", "classroom_attachment_root")
CLASSROOM_TOPIC_KEY = ndb.Key("Entity", "classroom_topic_root")
CLASSROOM_TOPIC_ASSIGNMENT_KEY = ndb.Key("Entity", "classroom_assignment_root")
CLASSROOM_ASSIGN_ASSIGNMENT_KEY = ndb.Key("Entity", "classroom_assign_assignment_root")
CLASSROOM_POST_KEY = ndb.Key("Entity", "classroom_post_root")
STREAM_KEY = ndb.Key("Entity", "stream_root")
BLOG_KEY = ndb.Key("Entity", "blog_root")
BLOG_LOV_KEY = ndb.Key("Entity", "blog_lov_root")
BLOG_CREATION_KEY = ndb.Key("Entity", "write_blog_root")



# Send grid Key
send_grid = lib.sendgrid.SendGridAPIClient(apikey=os.environ['SEND_GRID_KEY'])


class Roles:
    def __init__(self):
        pass

    normal_user = 1  # normal user
    blog_qa = 12  # Blog QA
    blog_admin = 13  # Blog Admin


class AppSettings:
    def __init__(self):
        pass

    admin_user_id = 'ahFkZXZ-a2VibG9nLTIyMzQxMnInCxIGRW50aXR5Igl1c2VyX3Jvb3QMCxIFVXNlcnMYgICAgIDQuwsM'
    admin_email_address = 'adminKEnew123@kompassera.com'
