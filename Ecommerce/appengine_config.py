from google.appengine.ext import vendor
import os
# a/
# # Add any libraries installed in the "lib" folder.
#
#  vendor.add('lib')
vendor.add(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'lib'))#  vendor.add('lib')