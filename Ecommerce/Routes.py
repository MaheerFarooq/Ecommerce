import logging
import webapp2

from controllers import Home, Categories, Products, Login, imports, Checkout
from lib.requests_toolbelt.adapters import appengine

appengine.monkeypatch()
config = {}
config['webapp2_extras.sessions'] = {
    'secret_key': 'my-super-secret-key',
}

app = webapp2.WSGIApplication(
    [


        # Dashboard

        ('/', Home.LandingHandler),
        ('/index', Home.Home),
        ('/signin', Login.LoginUser),
        ('/products', Categories.ViewCategories),
        ('/product-page', Products.ViewProducts),
        ('/checkout', Checkout.Checkout),



        ('/.*', Home.NotFound),
    ], debug=True, config=config)


# Extra Hanlder like 404 500 etc
def handle_404(request, response, exception):
    logging.exception(exception)
    response.write('Page not found!')
    response.set_status(404)


app.error_handlers[404] = handle_404
