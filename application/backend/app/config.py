import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    MONGO_URI = "mongodb+srv://csc648:6So9gzE3Jw5Oenup@csc648-team1.cpmmq.mongodb.net/?retryWrites=true&w=majority&appName=CSC648-Team1"


