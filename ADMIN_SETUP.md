# MediCura Admin Login and Dashboard Setup

This project uses the existing static HTML/CSS/JavaScript frontend (not React components) and Express/MySQL backend. The admin pages were added to the existing route system to avoid replacing the website.

## 1. Configure admin credentials

Open `backend/.env` and change `ADMIN_EMAIL` and `ADMIN_PASSWORD` to credentials only the administrator knows. Keep `JWT_SECRET` private and do not share or commit `.env` to Git. The included `.env` is local-development configuration; replace the example admin password before use.

## 2. Install backend dependencies

Open a terminal in `medicura/backend` and run:

```bash
npm install
```

This installs `jsonwebtoken` along with the existing dependencies.

## 3. Start backend

From `medicura/backend`:

```bash
node server.js
```

Backend listens on port 5000. Keep the existing database configuration in `backend/.env` correct for your machine.

## 4. Start the website

From the `medicura` project root, use your existing frontend preview command/setup. The admin frontend makes requests to `http://localhost:5000` and the default CORS origin is `http://localhost:3000`.

## 5. Open admin pages

- Login: `http://localhost:3000/admin/login`
- Dashboard: `http://localhost:3000/admin/dashboard`

Sign in with `ADMIN_EMAIL` and `ADMIN_PASSWORD` from `backend/.env`. The dashboard fetches the saved inquiries from MySQL. It supports search, status filter, refresh, mark contacted, delete and logout.

## Security notes

- Admin inquiry APIs require a signed bearer token. Login token expires after one hour.
- The login token is kept in `sessionStorage` for the current browser tab and removed on logout.
- Change the sample admin password before use, use HTTPS in production, add login rate limiting, and never publish `.env`.
- This frontend is the existing vanilla JavaScript site; it is not a React/Vite project. Admin routes were integrated into `app.js` and `styles.css`.
