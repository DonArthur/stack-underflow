# Stack Underflow

A simple React.js Q&A web application inspired by Stack Overflow, with login and user features such as browsing, posting, and updating questions, plus participating in discussions through comments.

🔗 **Live Demo:** [`Deployed app with dummy data`](https://stack-underflow-chi.vercel.app/login)
📂 **Backend Source:** [`/backend`](./backend)

---

## Features

- 🔐 User authentication (login)
- 📝 Post, browse, and update questions
- 💬 Comment on questions to participate in discussions
- 👤 Manage your own posted content

---

## Tech Stack

**Frontend**
- React + Vite + TypeScript
- Axios for API communication

**Backend**
- Java Spring Boot
- Spring Data JPA / Hibernate
- PostgreSQL

**Infrastructure**
- Docker (multi-stage builds for both frontend and backend)
- Nginx (serving the frontend build + SPA routing)
- Neon (managed PostgreSQL, cloud-hosted)

---

## About the Live Demo

The deployed frontend runs on **mock data** rather than a live backend connection. This was a deliberate choice rather than a limitation — free-tier hosting for full-stack apps with persistent databases currently requires card verification on every major platform (Render, Oracle Cloud, etc.), which added friction without adding much value for a portfolio piece.

The backend is **fully functional and independently runnable** — it's Dockerized, connects to PostgreSQL, and has been tested end-to-end (auth, CRUD operations, and CORS all working). You're welcome to clone the repo and run it yourself using the instructions below.

---

## Running the Backend Locally

```bash
cd backend
docker build -t stack-underflow-backend .
docker run -p 8080:8080 \
  -e DB_URL=jdbc:postgresql://<your-host>:5432/<your-db> \
  -e DB_USERNAME=<your-username> \
  -e DB_PASSWORD=<your-password> \
  stack-underflow-backend
```

The API will be available at `http://localhost:8080`.

> Note: requires a running PostgreSQL instance (local or cloud, e.g. [Neon](https://neon.tech)). See `/backend/Dockerfile` for build details.

---

## Running the Frontend Locally

```bash
cd frontend
npm install
npm run dev
```

Or containerized:

```bash
cd frontend
docker build -t stack-underflow-frontend .
docker run -p 8081:80 stack-underflow-frontend
```

---

## Project Structure

```
stack-underflow/
├── backend/          # Spring Boot API
│   ├── src/
│   ├── Dockerfile
│   └── pom.xml
├── frontend/         # React + Vite + TypeScript
│   ├── src/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
└── README.md
```

---

## Screenshots

[Add a few screenshots or a short GIF of the app here]

---

## What I Learned

Building and containerizing this project involved working through real deployment challenges, including:
- Writing multi-stage Docker builds to keep image sizes minimal
- Debugging container networking (`host.docker.internal` vs `localhost` depending on request direction)
- Configuring CORS between separately-hosted frontend and backend
- Fixing SPA client-side routing 404s via custom Nginx configuration
- Externalizing configuration via environment variables for portability across environments