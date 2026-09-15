# Portfolio Contact Backend

This service receives the portfolio contact form and sends each inquiry to the configured Gmail inbox through Gmail SMTP and Nodemailer. The visitor email is used only as `Reply-To`; SMTP credentials always belong to the portfolio owner's Gmail account.

## Structure

```text
backend/
├── config/mailer.js
├── controllers/contactController.js
├── routes/contactRoutes.js
├── .env.example
├── .gitignore
├── package.json
└── server.js
```

## Install and run

```bash
cd backend
npm install
npm run dev
```

Use `npm start` in production. Copy `.env.example` to `.env` and set the values below:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASSWORD=your-google-app-password
MAIL_FROM=your-gmail@gmail.com
MAIL_TO=your-gmail@gmail.com
```

Never commit `.env`. `MAIL_FROM` must be the authenticated Gmail account. Create a Google App Password in Google Account security after enabling 2-Step Verification. Do not use the normal Gmail password. On startup, Nodemailer runs `transporter.verify()` without sending an email and reports SMTP status.

## API testing

Health check: `GET http://localhost:5000/api/health`

Contact request:

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","subject":"Website Project","message":"I need a website for my business."}'
```

The API trims and validates every field, limits lengths, rate-limits submissions to 5 per 15 minutes per IP, and returns generic errors without exposing SMTP details.

## Connect the existing React form

Add `VITE_API_URL=http://localhost:5000` to the frontend `.env`, then use this request in the existing submit handler:

```js
const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, subject, message })
})

const result = await response.json()
if (!response.ok) throw new Error(result.message)
```

For production, set `VITE_API_URL=https://YOUR-BACKEND-URL` in Vercel environment variables. Set backend `CLIENT_URL` to the exact Vercel origin, such as `https://YOUR-VERCEL-DOMAIN.vercel.app`. Do not hardcode the URL in multiple components.

## Deploy on Render or Railway

Create a Node web service with `backend` as its root directory, or configure the repository root accordingly.

Render build command: `npm install`  
Render start command: `npm start`

Add these dashboard environment variables: `PORT`, `CLIENT_URL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `MAIL_FROM`, and `MAIL_TO`. Use `smtp.gmail.com`, `587`, your Gmail address, and a Google App Password. Render and Railway provide `PORT`; the app falls back to 5000 locally.

## Common errors

- `SMTP verification failed`: check the Gmail address, App Password, host, and port. App Passwords require 2-Step Verification.
- CORS errors: make `CLIENT_URL` exactly match the frontend origin, including `https://` and without a trailing path.
- `Route not found`: use `/api/health` or `/api/contact` with the correct HTTP method.
- Email not received: check spam, confirm `MAIL_TO`, and inspect hosting logs. Passwords are never logged.