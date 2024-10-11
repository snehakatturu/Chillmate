from flask import render_template, request, redirect, flash, url_for
from app import app, db
from app.forms import signinForm

@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'William'}
    return render_template('index.html', title='Home', user=user)

@app.route('/signin', methods=('GET', 'POST'))
def signin():

    if request.method == "POST":
        form = signinForm()
        input_name = form.username.data
        input_password = form.password.data

        db.userLogin.insert_one({
            "username": input_name,
            "password": input_password,
        })
        flash("Todo successfully added", "success")
        return redirect("/index")
    else: 
        form = signinForm()

    return render_template('signin.html', title='Sign In', form=form)