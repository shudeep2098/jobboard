# JobBoard Backend

A FastAPI backend for the JobBoard application.

## Features

- Get all jobs
- Get single job details
- Filter jobs by type
- Filter jobs by location
- Create new jobs
- MongoDB integration
- Clean architecture

---

# Tech Stack

- FastAPI
- MongoDB
- PyMongo
- Python
- Uvicorn

---

# Folder Structure

backend/
│
├── app/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── schemas/
│   ├── services/
│   └── main.py
│
├── requirements.txt
└── .env

---

# Installation

## Clone Repository

git clone <repository_url>

---

## Create Virtual Environment

uv venv


## Activate Virtual Environment

### Windows

venv\Scripts\activate

# Environment Variables

Create a .env file.

MONGO_URL=your_mongodb_url

---

# Run Server

uvicorn app.main:app --reload

---

# Base URL

http://127.0.0.1:8000

---

# API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /jobs | Get all jobs |
| GET | /jobs/{id} | Get single job |
| GET | /jobs/type/{type} | Filter by type |
| GET | /jobs/location/{location} | Filter by location |
| POST | /jobs | Create new job |

---

# Sample Job Data

{
  "title": "Frontend Developer",
  "company": "Google",
  "location": "Chennai",
  "type": "Full Time",
  "salary": "12 LPA",
  "skills": ["React", "JavaScript", "CSS"],
  "experience": "2 Years"
}

---

# Swagger Docs

http://127.0.0.1:8000/docs