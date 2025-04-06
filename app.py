from flask import Flask, request, jsonify, render_template, redirect, url_for
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://OweeMirajkar:r.3y_rP_Ne6xAmX@cluster0.abxbzkz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app = Flask(__name__)

mongo = MongoClient(uri, server_api=ServerApi('1'))

@app.route('/')
def index():
    return render_template('index.html')  # renders login/register page

@app.route('/platform')
def platform():
    return render_template('platform.html')  # after login success

@app.route('/register', methods=['POST'])
def register():
    name = request.form.get('name')
    email = request.form.get('email')
    phone = request.form.get('phone')
    dob = request.form.get('dob')
    gender = request.form.get('gender')
    password = request.form.get('password')

    if mongo.SkillBridge.students.find_one({'email': email}):
        return render_template('index.html', message="Email already registered")

    mongo.SkillBridge.students.insert_one({
        'name': name,
        'email': email,
        'phone': phone,
        'dob': dob,
        'gender': gender,
        'password': password
    })

    return redirect('/platform')

@app.route('/login', methods=['POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')

    user = mongo.SkillBridge.students.find_one({'email': email, 'password': password})

    print('reached')

    if user:
        return redirect('platform')
    else:
        return render_template('index.html', message="Invalid email or password")

if __name__ == '__main__':
    app.run(debug=True)
