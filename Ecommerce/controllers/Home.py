from Handlers import BaseHandler
from Handlers import Handler
import jinja2
from lib.firebase_admin import auth


# Bolt Reactor >> KompassEra >> Landing Handler Class
class LandingHandler(BaseHandler, Handler):
    def get(self):
        template = self.jinja_environment.get_template("main/index.html")
        self.response.out.write(template.render({}))


class Home(BaseHandler, Handler):
    def get(self):
        template = self.jinja_environment.get_template("main/index.html")
        self.response.out.write(template.render({}))
# Bolt Reactor >> KompassEra >> Usuability-Test Handler Classes
class NotFound(BaseHandler):
    def get(self):
        jinja_environment = self.jinja_environment
        template = jinja_environment.get_template("/ke/home/not-found.html")
        self.response.out.write(template.render({}))


