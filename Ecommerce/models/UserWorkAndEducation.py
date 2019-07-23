from google.appengine.ext import ndb
import datetime
from controllers.imports import *


class UserCollegeDetail(ndb.Model):
    college_school = ndb.StringProperty()
    college_description = ndb.StringProperty()
    college_major_subjects = ndb.StringProperty()
    college_graduated = ndb.StringProperty()
    college_attend_for = ndb.StringProperty()
    college_degree = ndb.StringProperty()
    college_start_date_year = ndb.StringProperty()
    college_start_date_month = ndb.StringProperty()
    college_start_date_day = ndb.StringProperty()
    college_end_date_year = ndb.StringProperty()
    college_end_date_month = ndb.StringProperty()
    college_end_date_day = ndb.StringProperty()

    college_start_date_obj = ndb.DateProperty()
    college_end_date_obj = ndb.DateProperty()
    user_key = ndb.StringProperty()
    created_date_time = ndb.DateTimeProperty(auto_now_add=True)
    """
    attended For Details
    "1" School 
    "2" College
    "3" University 
    "4" Graduate School 
    "5" Vocational School
    """

    @classmethod
    def add_education(cls, request, session, USER_EDUCATION_KEY):
        user_college = UserCollegeDetail.query(UserCollegeDetail.user_key == session.get('user_id')).get()
        if not user_college:
            user_college = UserCollegeDetail()
        college_school = request.get('college_school')
        college_major_subjects = request.get('college_major_subjects')
        college_graduated = request.get('college_graduated')
        college_attender_for = request.get('college_attender_for')
        college_degree = request.get('college_degree')
        college_description = request.get('college_description')
        college_start_date_year = request.get('college_start_date_year')
        college_start_date_month = request.get('college_start_date_month')
        college_start_date_day = request.get('college_start_date_day')
        college_end_date_year = request.get('college_end_date_year')
        college_end_date_month = request.get('college_end_date_month')
        college_end_date_day = request.get('college_end_date_day')
        if college_graduated == 'on':
            pass
        else:
            college_graduated = 'off'
            college_end_date_year = college_end_date_month = college_end_date_day = None

        if request.get('education-key'):
            user_college = ndb.Key(urlsafe=request.get('education-key')).get()
        else:
            user_college = UserCollegeDetail(parent=USER_EDUCATION_KEY)

        user_college.college_school = college_school
        user_college.college_major_subjects = college_major_subjects
        user_college.college_graduated = college_graduated
        user_college.college_attend_for = college_attender_for
        user_college.college_degree = college_degree
        user_college.college_description = college_description
        user_college.college_start_date_year = college_start_date_year
        user_college.college_start_date_month = college_start_date_month
        user_college.college_start_date_day = college_start_date_day
        user_college.college_end_date_year = college_end_date_year
        user_college.college_end_date_month = college_end_date_month
        user_college.college_end_date_day = college_end_date_day
        try:

            user_college.college_start_date_obj = date_parser.parse(college_start_date_day + " " + college_start_date_month + " " + college_start_date_year)
        except:
            user_college.college_start_date_obj = None

        try:

            user_college.college_end_date_obj = date_parser.parse(college_end_date_day + " " + college_end_date_month + " " + college_end_date_year)
        except:
            user_college.college_end_date_obj = None

        user_college.user_key = session.get('user_id')
        user_college.put()

    @classmethod
    def get_institutes(cls, session, USER_EDUCATION_KEY):

        return cls.query(cls.user_key == session.get('user_id'), ancestor=USER_EDUCATION_KEY).order( -cls.college_end_date_year)

    @classmethod
    def delete_college_details(cls, request):
        return ndb.Key(urlsafe=request.get('education-key')).get().key.delete()


class UserWorkDetail(ndb.Model):
    work_company = ndb.StringProperty()
    work_position = ndb.StringProperty()
    work_city = ndb.StringProperty()
    work_description = ndb.StringProperty()
    work_currently_work_here = ndb.StringProperty()
    work_start_date_year = ndb.StringProperty()
    work_start_date_month = ndb.StringProperty()
    work_start_date_day = ndb.StringProperty()
    work_end_date_year = ndb.StringProperty()
    work_end_date_month = ndb.StringProperty()
    work_end_date_day = ndb.StringProperty()

    work_start_date_obj = ndb.DateProperty()
    work_end_date_obj = ndb.DateProperty()
    user_key = ndb.StringProperty()
    created_date_time = ndb.DateTimeProperty(auto_now_add=True)

    @classmethod
    def add_work_details(cls, request, session, USER_WORK_KEY):
        work_company = request.get('work_company')
        work_position = request.get('work_position')
        work_city = request.get('work_city')
        work_description = request.get('work_description')
        work_currently_work_here = request.get('work_currently_work_here')
        work_start_date_year = request.get('work_start_date_year')
        work_start_date_month = request.get('work_start_date_month')
        work_start_date_day = request.get('work_start_date_day')
        work_end_date_year = request.get('work_end_date_year')
        work_end_date_month = request.get('work_end_date_month')
        work_end_date_day = request.get('work_end_date_day')
        if work_currently_work_here == 'on':
            work_end_date_year = work_end_date_month = work_end_date_day = None
        else:
            work_currently_work_here = 'off'

        if request.get('work-key'):
            user_work = ndb.Key(urlsafe=request.get('work-key')).get()
        else:
            user_work = UserWorkDetail(parent=USER_WORK_KEY)

        try:
            user_work.work_start_date_obj = date_parser.parse(work_start_date_day + " " + work_start_date_month + " " + work_start_date_year)

        except:
            user_work.work_start_date_obj = None

        try:
            user_work.work_end_date_obj = date_parser.parse(work_end_date_day + " " + work_end_date_month + " " + work_end_date_year)
        except:
            user_work.work_end_date_obj = None

        user_work.work_company = work_company
        user_work.work_position = work_position
        user_work.work_city = work_city
        user_work.work_description = work_description
        user_work.work_currently_work_here = work_currently_work_here
        user_work.work_start_date_year = work_start_date_year
        user_work.work_start_date_month = work_start_date_month
        user_work.work_start_date_day = work_start_date_day
        user_work.work_end_date_year = work_end_date_year
        user_work.work_end_date_month = work_end_date_month
        user_work.work_end_date_day = work_end_date_day
        user_work.user_key = session.get('user_id')
        user_work.put()

    @classmethod
    def get_work_details(cls, session, USER_WORK_KEY):
        return cls.query(cls.user_key == session.get('user_id'), ancestor=USER_WORK_KEY).order(-cls.work_currently_work_here)

    @classmethod
    def delete_work_detail(cls, request):
        return ndb.Key(urlsafe=request.get('work-key')).get().key.delete()


class UserProfessionalSkill(ndb.Model):
    user_key = ndb.StringProperty()
    professional_skills = ndb.StringProperty(repeated=True)
    created_date_time = ndb.DateTimeProperty(auto_now_add=True)

    @classmethod
    def add_skills(cls, request, session, USER_SKILL_KEY):
        professional_skill = UserProfessionalSkill.query(UserProfessionalSkill.user_key == session.get('user_id'), ancestor=USER_SKILL_KEY).get()
        if professional_skill:
            pass
        else:
            professional_skill = UserProfessionalSkill(parent=USER_SKILL_KEY)
        professional_skill.user_key = session.get('user_id')
        professional_skill.professional_skills = request.get_all('user_professional_skills')
        professional_skill.put()

    @classmethod
    def get_skills(cls, session, USER_SKILL_KEY):
        return cls.query(cls.user_key == session.get('user_id'), ancestor=USER_SKILL_KEY).get()
