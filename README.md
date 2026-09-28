# Git Club Command Center

A responsive, frontend-only internal dashboard for a student Git Club committee. Built with Vite and vanilla JavaScript for a lightweight hackathon setup.

## Features

- Responsive GitHub-inspired dark dashboard
- Overview metrics, event participation chart, and project status chart
- Upcoming events, members, projects, and announcements pages
- Functional navigation and mobile sidebar
- Quick action forms that update the dashboard during the current browser session
- Public read-only mode with demo committee login, notifications, and global search
- No backend or database required for the demo scope

## Run locally

```bash
npm install
npm run dev
```

The app uses mock data in `src/main.js`. A future backend can replace the local state with API calls and persistent authentication without changing the main page structure.

## Demo login

- Username: choose any non-empty name
- Email: choose any non-empty email
- Password: `gitclub123`

The login session is stored in browser `localStorage`. This is suitable for a frontend hackathon demo, not production security.
