from flask import render_template, request, redirect, flash, url_for, session
from app import app, db
from app.forms import signinForm, loginForm

@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'user'}
    return render_template('index.html', title='Home', user=user)

@app.route('/login', methods=('GET', 'POST'))
def login():
    if request.method == 'POST':
        form = loginForm()
        id = form.studentId.data
        password = form.password.data

        # Check if the username and password match
        user = db.userLogin.find_one({'studentId': id, 'password': password})
        if user:
            flash('Login successful.', 'success')
            session['id'] = id
            # Add any additional logic, such as session management
            return redirect("/home")

        else:
            flash('Invalid username or password. Please try again.', 'danger')
    else:
        form = loginForm()

    return render_template('login.html', title='login', form=form)



@app.route('/signin', methods=('GET', 'POST'))
def signin():
    if request.method == "POST":
        form = signinForm()
        input_name = form.username.data
        input_password = form.password.data
        input_phone = form.phone.data
        input_email = form.email.data
        input_id = form.studentId.data

        db.userLogin.insert_one({
            "username": input_name,
            "password": input_password,
            "phone": input_phone,
            "email": input_email,
            "studentId": input_id
        })
        flash("Todo successfully added", "success")
        return redirect("/index")
    else: 
        form = signinForm()

    return render_template('signin.html', title='Sign In', form=form)

@app.route('/home', methods=('GET', 'POST'))
def home():
    getid = session['id']
    user = db.userLogin.find_one({'studentId': getid})
    currUser = {'username': user['username']}
    return render_template('home.html', title='home', currUser = currUser)
    