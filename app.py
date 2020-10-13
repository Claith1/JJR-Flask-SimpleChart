from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return  render_template('static-chart.html')

@app.route('/static-chart')
def static_chart():
    return render_template('static-chart.html')
if __name__ == '__main__':
    app.run()
