from flask import Flask, request
import os

app = Flask(__name__)

@app.route("/")
def home():
    return "Python App"

# Command Injection
@app.route("/run")
def run():
    cmd = request.args.get("cmd")
    os.system(cmd)
    return "Executed"

app.run(port=5000)
