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