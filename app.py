from flask import Flask, render_template #, redirect, url_for, request

app = Flask(__name__)
app.debug = True

@app.route('/')
def index():
    return render_template('index.html', title='Hello World!')

if __name__ == '__main__':
    app.run()
