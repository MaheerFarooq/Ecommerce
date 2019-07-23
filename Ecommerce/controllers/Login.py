from imports import *
from Handlers import BaseHandler
from Handlers import Handler

class LoginUser(BaseHandler, Handler):
    def get(self):
        self.response.delete_cookie('remember_me2')
        self.session.clear()
        self.session['log_out'] = True
        template = self.jinja_environment.get_template("/main/signin.html")
        self.response.out.write(template.render({}))
