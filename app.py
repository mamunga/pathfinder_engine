from flask import Flask, render_template, url_for, json
import os

app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True

data_files = ['alignments.json', 'classes.json', 'races.json', 'stats.json', 'skills.json']
data = dict()

for data_file in data_files:
    json_url = os.path.join("static/data", data_file)
    data = {**data, **(json.load(open(json_url)))}



@app.route('/')
def index():
    print(data)
    return render_template('index.html', data=data)

if __name__ == '__main__':
    app.run()
