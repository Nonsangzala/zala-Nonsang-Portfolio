import validator from 'validator'
import { transporter } from '../config/mailer.js'

const limits = { name: 100, email: 254, subject: 200, message: 5000 }

function clean(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export async function submitContact(req, res) {
  const contact = {
    name: clean(req.body?.name),
    email: clean(req.body?.email),
    subject: clean(req.body?.subject),
    message: clean(req.body?.message)
  }

  const valid = Object.entries(contact).every(([field, value]) => {
    return value.length > 0 && value.length <= limits[field]
  }) && validator.isEmail(contact.email)

  if (!valid) {
    return res.status(400).json({ success: false, message: 'Please provide valid contact details.' })
  }

  const receivedAt = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Kolkata'
  })
  const safe = Object.fromEntries(
    Object.entries(contact).map(([field, value]) => [field, escapeHtml(value)])
  )
  const text = [
    'New Portfolio Contact Inquiry', '', `Name: ${contact.name}`, `Email: ${contact.email}`,
    `Subject: ${contact.subject}`, `Date: ${receivedAt}`, '', 'Message:', contact.message
  ].join('\n')
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#1f2933;line-height:1.6">
      <div style="background:#14213d;padding:28px;color:#fff">
        <p style="margin:0 0 8px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#fca311">Portfolio Contact</p>
        <h1 style="margin:0;font-size:26px">New Portfolio Contact Inquiry</h1>
      </div>
      <div style="padding:28px;background:#f7f8fa;border:1px solid #e5e7eb">
        <p><strong>Name:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Subject:</strong> ${safe.subject}</p><p><strong>Date:</strong> ${escapeHtml(receivedAt)}</p>
        <div style="margin-top:24px;padding:18px;background:#fff;border-left:4px solid #fca311;white-space:pre-wrap">${safe.message}</div>
      </div>
    </div>`

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: contact.email,
      subject: `New Portfolio Inquiry - ${contact.subject}`,
      text,
      html
    })
    return res.status(200).json({ success: true, message: 'Your inquiry has been sent successfully.' })
  } catch (error) {
    console.error(`Contact email failed: ${error instanceof Error ? error.message : 'unknown error'}`)
    return res.status(500).json({ success: false, message: 'Unable to send your inquiry right now. Please try again later.' })
  }
}