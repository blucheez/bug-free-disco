from flask import Flask
app = Flask(__name__)

@app.route('/')
def icanenamethiswahteveriwant():
    return "Hello, indeed world"
