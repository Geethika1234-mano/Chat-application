from flask import Flask
from controllers.auth_controller import sign_in

app = Flask(__name__)


@app.route('/sign-in', methods=['POST'])
def sign_in_route():
    return sign_in()

if __name__ == '__main__':
    app.run(debug=True)
