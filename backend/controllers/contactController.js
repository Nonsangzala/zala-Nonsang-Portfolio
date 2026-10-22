import { transporter } from '../config/mailer.js'
import { pool } from '../config/database.js'

const limits = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5000
}

export async function submitContact(req, res) {
  const values = {
    name: typeof req.body?.name === 'string' ? req.body.name.trim() : '',
    email: typeof req.body?.email === 'string' ? req.body.email.trim() : '',
    subject: typeof req.body?.subject === 'string' ? req.body.subject.trim() : '',
    message: typeof req.body?.message === 'string' ? req.body.message.trim() : ''
  }

  if (
    values.name.length < 2 ||
    values.name.length > limits.name ||
    values.email.length > limits.email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) ||
    values.subject.length < 3 ||
    values.subject.length > limits.subject ||
    values.message.length < 10 ||
    values.message.length > limits.message
  ) {
    return res.status(400).json({ success: false, message: 'Please provide valid contact details and a message.' })
  }

  try {
    const saved = await pool.query(
      'INSERT INTO contact_inquiries (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING id',
      [values.name, values.email, values.subject, values.message]
    )

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD && process.env.MAIL_FROM && process.env.MAIL_TO) {
      try {
        await transporter.sendMail({
          from: process.env.MAIL_FROM,
          to: process.env.MAIL_TO,
          replyTo: values.email,
          subject: `Portfolio inquiry: ${values.subject}`,
          text: `Name: ${values.name}\nEmail: ${values.email}\nSubject: ${values.subject}\n\n${values.message}`
        })
      } catch (error) {
        console.error(`Inquiry saved; email delivery failed: ${error instanceof Error ? error.message : 'unknown error'}`)
      }
    }

    return res.status(201).json({ success: true, persisted: true, id: saved.rows[0].id, message: 'Your inquiry was saved successfully.' })
  } catch (error) {
    console.error(`Contact inquiry persistence failed: ${error instanceof Error ? error.message : 'unknown error'}`)
    return res.status(503).json({ success: false, message: 'The contact service is temporarily unavailable. Please try again later.' })
  }
}
