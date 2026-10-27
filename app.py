from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/project")
def project_data():
    return jsonify({
        "title": "Global Fuel Price Analytics",
        "period": "2020–2026",
        "fuel_types": ["Petrol", "Diesel", "LPG"],
        "tools": ["HTML", "CSS", "JavaScript", "Flask", "Tableau Public"]
    })

if __name__ == "__main__":
    app.run(debug=True)