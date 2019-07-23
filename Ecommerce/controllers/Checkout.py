from imports import *
from Handlers import BaseHandler
from Handlers import Handler

class Checkout(BaseHandler, Handler):
    def get(self):
        template = self.jinja_environment.get_template("/main/checkout.html")
        self.response.out.write(template.render({}))