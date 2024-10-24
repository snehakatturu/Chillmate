from flask import Flask,  jsonify
from app.config import Config
from flask_pymongo import PyMongo
import pymongo

app = Flask(__name__)
app.config.from_object(Config)

# #
# mongodb_client = PyMongo(app)
# db = mongodb_client.db
# #

connection_string = "mongodb+srv://csc648:6So9gzE3Jw5Oenup@csc648-team1.cpmmq.mongodb.net/?retryWrites=true&w=majority&appName=CSC648-Team1"

client = pymongo.MongoClient(connection_string)
db = client["your_database_name"]
collection = db["userLogin"]



from app import routes