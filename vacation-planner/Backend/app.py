from flask import Flask, jsonify 

from resources.users import users

import models 

from flask_cors import CORS

from flask_login import LoginManager 

import os 

from dotenv import load_dotenv
load_dotenv() # Takes the enviroment variables from .env

DEBUG=True # To print Error messages in Development
PORT=8000

app = Flask(__name__) #instantiating the flask class to create an app --

# Set up secret/key for sessions:
app.secret_key = os.environ.get('FLASK_SECRET_KEY')
print(os.environ.get('FLASK_SECRET_KEY'))

#Instantiate the LoginManager to get the login_manager
login_manager = LoginManager()

#Connect app with the login manager
login_manager.init_app(app)

# Load current_user from the user id store in sessions
@login_manager.user_loader
    