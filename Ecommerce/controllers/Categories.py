from imports import *
from Handlers import BaseHandler
from Handlers import Handler

class ViewCategories(BaseHandler, Handler):
    def get(self):
        template = self.jinja_environment.get_template("/main/Products.html")
        self.response.out.write(template.render({}))