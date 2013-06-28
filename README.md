# Flask Bootstrap

This project is a basic starting point for a Flask project containing Twitter
Bootstrap.

## Install

1. Clone Github repo

    ```
    git clone git://github.com/davidsackett/flask-bootstrap.git <project name>
    ```

2. Setup the Virtual Environment (must have pip and virtualenv installed)

    ```
    cd <project name>
    cd .venv
    virtualenv .
    . ./bin/activiate
    # install dependencies (just Flask right now)
    pip install -r requirements.txt
    cd ..
    ```

3. Run the application

    ```
    python app.py
    ```

4. Open your browser to http://127.0.0.1:5000/

## File locations

* `app.py` - basic Flask app
* `static/css/` - your css files
* `static/js/` - your js files
* `static/img/` - your image files
* `static/vendor/` - static files from vendors
* `templates` - Your Jinja 2 templates

## References

* [Flask quickstart](http://flask.pocoo.org/docs/quickstart/)
* [Twitter Bootstrap Docs](http://twitter.github.com/bootstrap/scaffolding.html)
