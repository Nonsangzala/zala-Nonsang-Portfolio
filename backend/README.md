# Portfolio Contact Backend

This service validates and permanently stores each inquiry in PostgreSQL. Email delivery is a separate optional notification through Gmail SMTP; a submission remains successful if it was saved but notification email is unavailable.

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
DATABASE_URL=postgresql://user:password@host:5432/database
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASSWORD=your-google-app-password
MAIL_FROM=your-gmail@gmail.com
MAIL_TO=your-gmail@gmail.com
```

Never commit `.env`. `MAIL_FROM` must be the authenticated Gmail account. Create a Google App Password in Google Account security after enabling 2-Step Verification. Do not use the normal Gmail password. On startup, Nodemailer runs `transporter.verify()` without sending an email and reports SMTP status.

## API testing

Health check: [(https://portfolio-contact-backend-wjr4.onrender.com)]

Contact request:

```bash
https://portfolio-contact-backend-wjr4.onrender.com
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","subject":"Website Project","message":"I need a website for my business."}'
```

The API trims and validates every field, limits lengths, rate-limits submissions to 5 per 15 minutes per IP, and returns generic errors without exposing SMTP details.

## Connect the existing React form

Add[ https://portfolio-contact-backend-wjr4.onrender.com]https://portfolio-contact-backend-wjr4.onrender.com to the frontend `.env`, then use this request in the existing submit handler:

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

Create a hosted PostgreSQL database and set its private connection string as `DATABASE_URL` in Render. The service creates the `contact_inquiries` table at startup. Set `CLIENT_URL` to the exact Vercel origin. SMTP settings are optional; if enabled, configure `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `MAIL_FROM`, and `MAIL_TO`. Email does not replace database storage.

Render health check `/api/health` returns HTTP 503 when PostgreSQL is unavailable. Contact requests return success only after the insert completes. Never put database or mail secrets in frontend variables.

## Common errors

- `SMTP verification failed`: check the Gmail address, App Password, host, and port. App Passwords require 2-Step Verification.
- CORS errors: make `CLIENT_URL` exactly match the frontend origin, including `https://` and without a trailing path.
- `Route not found`: use `/api/health` or `/api/contact` with the correct HTTP method.
- Email not received: check spam, confirm `MAIL_TO`, and inspect hosting logs. Passwords are never logged.
