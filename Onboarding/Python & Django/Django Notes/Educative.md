# Django File Structure

```
first_project/
  manage.py
  db.sqlite3
  first_project/
    __init__.py
    settings.py
    urls.py
    asgi.py
    wsgi.py
```

These files are:

* The outer first_project/ root directory, which is a container for our project. Its name doesn’t matter to Django; we can name it anything we like.

* manage.py : A command-line utility that lets us interact with our Django project in various ways.

* The inner first_project/ directory is the actual Python package for our project.

* first_project/__init__.py: This is a blank Python script that, due to its special name, lets Python know that this directory can be treated as a package.

* first_project/settings.py: This is a Python script where we will store all of our project settings.

* first_project/urls.py: This is a Python script that will store all the URL patterns for our project. Basically, it is where we will store the different pages of our web application.

* first_project/views.py: This is a Python script that will handle all of the requests and send an HttpResponse object in return.

* first_project/asgi.py: An entry-point for ASGI-compatible web servers to serve our project.

* first_project/wsgi.py: This is a Python script that acts as the Web Server Gateway Interface. It helps us in deploying our web application to production.

* db.sqlite3: This is a database file where all of the generated data will be stored.

## Django Commands

* Create a Django app in first_app directory
'''
python manage.py startapp first_app 
'''

* Run Django
'''
$ python manage.py runserver
'''

## Steps to Hello World
1. Go to the settings.py file of our project and add the application to the list of installed applications under INSTALLED_APPS.

2. Create first_app/viewspy file. 
2.b Import HttpResponse object from django.http module
    # from django.http import HttpResponse
2.c Create a view function called index that takes request as a parameter, and returns a HttpRequest object, which takes a string parameter that represents the content of the page.
    # def index(request):
        # return HttpResponse("Hello World!")

'''
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return HttpResponse("Hello World!")
```

3. Map this view to a URL in first_app/urls.py
3b. Import views from first_app.
3c. Add the index pattern to urlpatterns list: 
    # path('', views.index, name='index'),

First parameter is the path of the URL. Second parameter is the name of a function to which we've mapped this URL. Third parameter is the name of this specific URL.

```
from django.contrib import admin
from django.urls import path
from first_app import views

urlpatterns = [
    path('',views.index,name="index"),
    path('admin/', admin.site.urls),
]
```