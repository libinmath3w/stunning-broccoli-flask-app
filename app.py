from flask import Flask
import socket

app = Flask(__name__)
@app.route("/")
def hello_world():
    html = f"<h1>Stunning Broccoli Flask App - My Flask WebApp!</h1> Hello World! Served from <b>{socket.gethostname()}</b><br> Dev App </br>"
    return html
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
