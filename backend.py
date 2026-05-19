from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI(title="Portfolio Backend")

# -----------------------------
# CORS (React connection)
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # in production, replace with your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# DATA (your data.tsx converted)
# -----------------------------
portfolio_data: Dict[str, Any] = {
    "personalInfo": {
        "name": "Hamid Noor",
        "title": "CEO, Alpha Solutions (Lahore)",
        "location": "Lahore, Pakistan",
        "tagline": "Empowering businesses through digital excellence and visionary leadership.",
        "bio": "Hamid Noor is a seasoned executive and CEO of Alpha Solutions with over two decades of experience in the tech industry.",
        "leadershipOverview": "A visionary leader committed to innovation, integrity, and excellence.",
        "careerSummary": "Started as lead architect and moved into executive leadership roles across tech firms before founding Alpha Solutions."
    },

    "achievements": [
        {
            "id": "a1",
            "year": "2023",
            "title": "Excellence in Innovation Award",
            "description": "Recognized by the Lahore Tech Council for digital innovation.",
            "category": "award"
        },
        {
            "id": "a2",
            "year": "2022",
            "title": "Alpha Solutions 10th Anniversary",
            "description": "A decade of successful operations and growth.",
            "category": "milestone"
        },
        {
            "id": "a3",
            "year": "2021",
            "title": "Top 50 Entrepreneurs to Watch",
            "description": "Featured in Business Connect magazine.",
            "category": "accomplishment"
        },
        {
            "id": "a4",
            "year": "2020",
            "title": "Crisis Resilience Leader",
            "description": "Maintained company stability during global disruptions.",
            "category": "accomplishment"
        }
    ],

    "certificates": [
        {
            "id": "c1",
            "title": "Executive Leadership Program",
            "organization": "MIT Professional Education",
            "date": "2023",
            "imageUrl": "https://placehold.co/600x400"
        },
        {
            "id": "c2",
            "title": "Cloud Architecture Professional",
            "organization": "Stanford Continuing Studies",
            "date": "2022",
            "imageUrl": "https://placehold.co/600x400"
        },
        {
            "id": "c3",
            "title": "Agile Management Certification",
            "organization": "MIT Professional Education",
            "date": "2021",
            "imageUrl": "https://placehold.co/600x400"
        }
    ]
}

# -----------------------------
# ROOT TEST
# -----------------------------
@app.get("/")
def root():
    return {
        "status": "running",
        "message": "Portfolio backend is working"
    }

# -----------------------------
# FULL PORTFOLIO API
# -----------------------------
@app.get("/api/portfolio")
def get_portfolio():
    return portfolio_data

# -----------------------------
# PERSONAL INFO ONLY
# -----------------------------
@app.get("/api/personal")
def get_personal():
    return portfolio_data["personalInfo"]

# -----------------------------
# ACHIEVEMENTS API
# -----------------------------
@app.get("/api/achievements")
def get_achievements():
    return portfolio_data["achievements"]

@app.get("/api/achievements/{achievement_id}")
def get_achievement(achievement_id: str):
    for a in portfolio_data["achievements"]:
        if a["id"] == achievement_id:
            return a
    return {"error": "Achievement not found"}

# -----------------------------
# CERTIFICATES API
# -----------------------------
@app.get("/api/certificates")
def get_certificates():
    return portfolio_data["certificates"]

@app.get("/api/certificates/{cert_id}")
def get_certificate(cert_id: str):
    for c in portfolio_data["certificates"]:
        if c["id"] == cert_id:
            return c
    return {"error": "Certificate not found"}

# -----------------------------
# CONTACT FORM (frontend ready)
# -----------------------------
class ContactForm(BaseModel):
    name: str
    email: str
    message: str

messages: List[dict] = []

@app.post("/api/contact")
def submit_contact(form: ContactForm):
    messages.append(form.dict())
    return {
        "status": "success",
        "message": "Message stored successfully"
    }

@app.get("/api/contact/messages")
def get_messages():
    return messages

# -----------------------------
# RUN INFO
# -----------------------------
"""
Run with:
uvicorn backend:app --reload

Backend URL:
http://127.0.0.1:8000

API Docs:
http://127.0.0.1:8000/docs
""" 