# JobBoard Frontend

A React frontend for the JobBoard application.

## Features

- Fetch all jobs
- View job details
- Filter jobs by type
- Loading spinner
- Error handling
- Skill badges
- React Router navigation
- Axios service architecture

---

# Tech Stack

- React
- React Router DOM
- Axios
- Vite

---

# Folder Structure

frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js

---

# Installation

## Clone Repository

git clone <repository_url>

---

## Install Packages

npm install

---

# Run Frontend

npm run dev

---

# Frontend Runs On

http://localhost:5173

---

# API Pattern Used

useState
(data, loading, error)

+

useEffect
(fetch on mount)

+

Axios Service File
(all API calls live here)

---

# Requirements Completed

- Fetch jobs using useEffect
- Loading spinner
- Error handling
- .map() rendering
- React Router
- useParams
- Filter buttons
- Axios service file
- Skill badges
- Clean folder structure

---

# Pages

| Route | Description |
|---|---|
| /jobs | Display all jobs |
| /jobs/:id | Show single job details |

---

# Components

| Component | Purpose |
|---|---|
| Navbar | Navigation |
| JobCard | Job UI card |
| Loader | Loading spinner |
| ErrorMessage | Error UI |
| SkillBadge | Skills pill |

---

# Services

All axios API calls are inside:

src/services/apiService.js

---

# Backend URL

http://127.0.0.1:8000