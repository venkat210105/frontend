from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from datetime import datetime

app = Flask(__name__)
CORS(app)

@app.route("/api/contact", methods=["POST"])
def contact():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ["firstName", "lastName", "email", "subject", "message"]
        for field in required_fields:
            if not data.get(field):
                return jsonify({"error": f"{field} is required"}), 400
        
        first_name = data["firstName"]
        last_name = data["lastName"]
        email = data["email"]
        subject = data["subject"]
        message = data["message"]
        
        # For now, we'll just log the message and return success
        # In a real application, you would send an email or save to database
        contact_info = {
            "timestamp": datetime.now().isoformat(),
            "name": f"{first_name} {last_name}",
            "email": email,
            "subject": subject,
            "message": message
        }
        
        # Log the contact message (in production, you'd save to database or send email)
        print(f"New contact message received: {contact_info}")
        
        return jsonify({
            "success": True,
            "message": "Thank you for your message! I will get back to you soon."
        }), 200
        
    except Exception as e:
        print(f"Error processing contact form: {str(e)}")
        return jsonify({"error": "An error occurred while sending your message"}), 500

@app.route("/api/contact/test", methods=["GET"])
def test_contact():
    return jsonify({"message": "Contact API is working!"}), 200

# For Vercel deployment
if __name__ == "__main__":
    app.run()

