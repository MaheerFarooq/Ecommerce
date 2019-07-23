from imports import *
from Handlers import BaseHandler
from Handlers import Handler

class ViewProducts(BaseHandler, Handler):
    def get(self):
        template = self.jinja_environment.get_template("/main/product-page.html")
        self.response.out.write(template.render({}))