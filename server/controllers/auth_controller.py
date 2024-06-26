from flask import request


def sign_in():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    