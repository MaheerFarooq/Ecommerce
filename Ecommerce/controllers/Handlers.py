import webapp2
from webapp2_extras import sessions
import jinja2
import os
template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader(template_dir), autoescape=True)
class BaseHandler(webapp2.RequestHandler):
   """
   This class holds the session information of a particular logged in
   user. Which helps us to use that information later.
   """
   def dispatch(self):
       # Get a session store for this request.
       self.session_store = sessions.get_store(request=self.request)
       try:
           # Dispatch the request.
           webapp2.RequestHandler.dispatch(self)
       finally:
           # Save all sessions.
           self.session_store.save_sessions(self.response)
   @webapp2.cached_property
   def session(self):
       # Returns a session using the default cookie key.
       return self.session_store.get_session()
class Handler(webapp2.RequestHandler):
   """
   This class is the main handler. Which is used to render our static Webpages.
   """
   def write(self, *a, **kw):
       """
       This function gets a static Webpage name, and the object which we want to use on our
       front static page.
       :param a:
       :param kw:
       """
       self.response.out.write(*a, **kw)
   def render_str(self, template, **params):
       """
       This function gets a static Webpage name, and the object which we want to use on our
       front static page.
       :param template:
       :param params:
       :return: rendered_page
       """
       t = jinja_env.get_template(template)
       return t.render(params)
   def render(self, template, **kw):
       self.write(self.render_str(template, **kw))
   @property
   def jinja_environment(self):
       jinja_environment = jinja2.Environment(
           loader=jinja2.FileSystemLoader(
               os.path.join(os.path.dirname(__file__),
                            '../templates'
                            ))
       )
       return jinja_environment
