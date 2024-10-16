from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField, IntegerField, EmailField
from wtforms.validators import DataRequired

class signinForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    phone = StringField('Phone Number', validators=[DataRequired()])
    studentId = StringField('studentId', validators=[DataRequired()])
    email = EmailField('Email', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])

    submit = SubmitField('Sign In')

class loginForm(FlaskForm):
    studentId = StringField('studentId', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Log In')
