from bottle import route, run, template, request, post, response, Bottle, static_file
import json
import uuid
import smtplib
from email.mime.text import MIMEText
from truckpad.bottle.cors import CorsPlugin, enable_cors
import os

from dotenv import dotenv_values
dir_path = os.path.dirname(os.path.realpath(__file__))

config = dotenv_values(dir_path + "/.env")

app = Bottle()

@app.get("/")
def index():
    return static_file("index.html", root='/home/lvjhn98/cccsp-dtt/backend/dist/')

@app.post('/submit')
def submit():
    some_uuid = uuid.uuid4()

    # get result
    result = json.loads(request.body.read().decode("utf-8"))
    result["id"] = str(some_uuid)
    result["ip"] = request.environ.get('HTTP_X_FORWARDED_FOR') or request.environ.get('REMOTE_ADDR')
    result_str = json.dumps(result)

    # send via smtp
    conn = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    conn.login("lstaana@gbox.adnu.edu.ph", config["EMAIL_PASSWORD"])

    conn.sendmail("lstaana@gbox.adnu.edu.ph", "lstaana@gbox.adnu.edu.ph", MIMEText(result_str).as_string())
    conn.quit()

    # store in file
    file = open(config["RESULTS_BASE_PATH"] + "results/" + str(some_uuid) + ".json", "w")
    file.write(result_str)
    file.close()

    return result

@app.route('<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root='/home/lvjhn98/cccsp-dtt/backend/dist/')

application = app
