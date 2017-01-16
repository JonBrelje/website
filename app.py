from flask import Flask, render_template
import os
import sendgrid
from sendgrid.helpers.mail import *

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/_email_form')
def _eamil_form():
	sg = sendgrid.SendGridAPIClient(apikey=os.environ.get('SENDGRID_API_KEY'))
	from_email = Email("test@example.com")
	subject = "Hello World from the SendGrid Python Library!"
	to_email = Email("jonathan.brelje@gmail.com")
	content = Content("text/plain", "Hello, Email!")
	mail = Mail(from_email, subject, to_email, content)
	response = sg.client.mail.send.post(request_body=mail.get())
	print(response.status_code)
	print(response.body)
	print(response.headers)
	return render_template('email_form.html')

if __name__ == '__main__':
    app.run()
