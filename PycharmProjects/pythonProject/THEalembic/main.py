import flask
from flask import Flask
from waitress import serve
from check_models import *

app = Flask(__name__)


@app.route("/api/v1/hello-world-28")
def starting_endpoint():
    return flask.Response(status=200, response="Hello World 28")

test()

serve(app, port='5000')

# waitress-serve --port=5000 --url-scheme=http app:app