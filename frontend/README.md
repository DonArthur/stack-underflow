# StackUnderflow (Frontend Only)

## Overview

This project is a simplified frontend-only version of a Stack Overflow-like application.

It is built using:
- React.js + Typescript
- Tailwind CSS
- Zustand (state management)
- React Router

No backend or API integration is included in this deployed version. All data is managed in-memory.

> A fully working Spring Boot + PostgreSQL backend exists in [`/backend`](../backend) and can be run independently — see the [root README](../README.md) for setup instructions. It isn't connected here to keep the live demo free of hosting costs and card-verification requirements.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```
2. Run the app:
```bash
npm run dev
```
3. Open in browser:
```bash
http://localhost:5173
```

## Approach
This project is designed as a Single Page Application (SPA) with:
- Client-side routing using React Router
- Global state management using Zustand
- In-memory data simulation (mock data)

Architecture principles:
- Separation of concerns (pages, components, store, types)
- Reusable UI components
- Centralized state for questions, comments, and authentication

## Structure
```bash
src/
 ├── components/
 ├── pages/
 ├── routes/
 ├── store/
 ├── styles/
 ├── types/
```

## Assumptions
- Authentication is mocked (any username/password works)
- Data is not persisted (resets on refresh)
- No API calls are made

## Known Limitations
- No validation or error handling (yet)
- No pagination or search

## Future Improvements
- Connect to the existing Spring Boot backend (see `/backend`)
- Persistent storage
- Real authentication system
- Search & filtering
- Pagination