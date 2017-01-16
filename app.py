from flask import Flask, render_template, request
import os
import sendgrid
from sendgrid.helpers.mail import *

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/_get_email_form')
def get_email_form():
	return render_template('email_form.html')

@app.route('/_send_email', methods=['POST'])
def send_email():
	sg = sendgrid.SendGridAPIClient(apikey=os.environ.get('SENDGRID_API_KEY'))
	
	# Construct email
	from_email = Email(request.form['email-address'])
	subject = request.form['email-subject']
	to_email = Email("jonathan.brelje@gmail.com")
	message = "Name: " + request.form['email-name'] + "\n"
	message += request.form['email-message']
	content = Content("text/plain", message)
	
	#Send email
	mail = Mail(from_email, subject, to_email, content)
	response = sg.client.mail.send.post(request_body=mail.get())
	print(response.status_code)
	print(response.body)
	print(response.headers)

if __name__ == '__main__':
    app.run()
