import os
from flask import Flask, request, jsonify, render_template, redirect, session
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://OweeMirajkar:r.3y_rP_Ne6xAmX@cluster0.abxbzkz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app = Flask(__name__)
app.secret_key = "super secret key"

mongo = MongoClient(uri, server_api=ServerApi('1'))

@app.route('/')
def index():
    return render_template('index.html')  # renders login/register page

@app.route('/platform')
def platform():
    user = session.get('user',[])
    if not user:
        return redirect('/')
    return render_template('platform.html',user=user)  # after login success

@app.route('/jobs')
def jobs():
    return render_template('jobs.html')

@app.route('/register', methods=['POST'])
def register():
    name = request.form.get('name')
    email = request.form.get('email')
    phone = request.form.get('phone')
    dob = request.form.get('dob')
    skills = request.form.get('skills',[])
    gender = request.form.get('gender')
    password = request.form.get('password')

    if mongo.SkillBridge.students.find_one({'email': email}):
        return render_template('index.html', message="Email already registered")

    mongo.SkillBridge.students.insert_one({
        'name': name,
        'email': email,
        'skills': skills,
        'phone': phone,
        'dob': dob,
        'gender': gender,
        'password': password
    })

    session['user']={
        'email': email,
        'name': name,
        'skills' : skills
    }
    return redirect('/platform')

@app.route('/login', methods=['POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')

    user = mongo.SkillBridge.students.find_one({'email': email, 'password': password})

    print('reached')

    if user:
        session['user']={
        'email': email,
        'name': user['name'],
        'skills': user.get('skills',[])
        }
        return redirect('/platform')
    else:
        return render_template('index.html', message="Invalid email or password")

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)