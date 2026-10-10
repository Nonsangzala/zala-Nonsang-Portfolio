import React from 'react'
import '../styles/contact.css'

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9Zm2.2-.5 6.8 5.2 6.8-5.2H5.2Zm13.3 1.8-6.3 4.8a1 1 0 0 1-1.2 0L5.5 9.3v7.2c0 .3.2.5.5.5h12c.3 0 .5-.2.5-.5V9.3Z" fill="currentColor" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M6.6 2.9a1.6 1.6 0 0 1 1.7 1.7 15.9 15.9 0 0 0 7.5 7.5 1.6 1.6 0 0 1 1.7 1.7v2.6c0 .8-.7 1.5-1.5 1.5-.5 0-1.1-.1-1.6-.3a15.3 15.3 0 0 1-6.7-6.7c-.2-.5-.3-1-.3-1.5 0-.8.7-1.5 1.5-1.5h2.5ZM7.5 1.1a3.4 3.4 0 0 1 3.4 3.4c0 .9-.1 1.8-.5 2.7l-.8 1.9 1.8.9 1.9-.8c.9-.4 1.8-.5 2.7-.5A3.4 3.4 0 0 1 20.1 9c0 .9-.2 1.8-.6 2.7l-1.1 2.3a2.8 2.8 0 0 1-2.5 1.8h-.8a12.1 12.1 0 0 1-8.5-8.5V7.1a2.8 2.8 0 0 1 1.8-2.5L11.4 3.4c.9-.4 1.8-.6 2.7-.6A3.4 3.4 0 0 1 17.5 6c0 .9-.1 1.8-.5 2.7l-.8 1.9 1.8.9 1.9-.8c.9-.4 1.8-.5 2.7-.5A3.4 3.4 0 0 1 26.3 13.4v.7a3.4 3.4 0 0 1-3.4 3.4h-.7A15.8 15.8 0 0 1 7.7 18.8a3.4 3.4 0 0 1-3.4-3.4v-.7A3.4 3.4 0 0 1 7.7 11.3c.9 0 1.8.1 2.7.5l1.9.8.9-1.8-.8-1.9c-.4-.9-.5-1.8-.5-2.7A3.4 3.4 0 0 1 7.7 1.1Z" fill="currentColor" />
  </svg>
)

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2.8a7.2 7.2 0 0 1 7.2 7.2c0 5.5-7.2 11.8-7.2 11.8S4.8 15.5 4.8 10A7.2 7.2 0 0 1 12 2.8Zm0 3.4A3.8 3.8 0 1 0 12 13.8 3.8 3.8 0 0 0 12 6.2Z" fill="currentColor" />
  </svg>
)

const contactDetails = [
  {
    label: 'Email me',
    value: 'thakornonsangzala@gmail.com',
    href: 'mailto:thakornonsangzala@gmail.com',
    icon: <MailIcon />
  },
  {
    label: 'Call me',
    value: '+91 93133 27727',
    href: 'tel:+919313327727',
    icon: <PhoneIcon />
  },
  {
    label: 'Based in',
    value: 'India · Available worldwide',
    href: '#contact',
    icon: <LocationIcon />
  }
]

const defaultStatus = 'Your message will be sent securely to my inbox.'

export default function Contact() {
  const [status, setStatus] = React.useState({ type: 'default', message: defaultStatus })
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const setFieldState = (fieldName, isValid) => {
    const field = document.getElementById(`contact-${fieldName}`)
    if (field) {
      field.setAttribute('aria-invalid', String(!isValid))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isSubmitting) return

    const form = event.currentTarget
    const formData = new FormData(form)
    const values = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      subject: String(formData.get('subject') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim()
    }

    const validations = {
      name: values.name.length >= 2,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email),
      subject: values.subject.length >= 3,
      message: values.message.length >= 10
    }

    Object.entries(validations).forEach(([field, isValid]) => setFieldState(field, isValid))

    const firstInvalidField = Object.entries(validations).find(([, isValid]) => !isValid)
    if (firstInvalidField) {
      const invalidName = firstInvalidField[0]
      const input = document.getElementById(`contact-${invalidName}`)
      input?.focus()
      setStatus({ type: 'error', message: 'Please complete all required fields with valid information.' })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: 'default', message: 'Sending your inquiry…' })

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })

      const result = await response.json()
      if (!response.ok) throw new Error(result.message || 'Unable to send inquiry')

      setStatus({ type: 'success', message: 'Your inquiry has been sent successfully.' })
      form.reset()
      Object.keys(validations).forEach((field) => setFieldState(field, true))
    } catch (error) {
      setStatus({ type: 'error', message: error instanceof Error ? error.message : 'Unable to send your inquiry right now. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-container">
        <div className="contact-intro">
          <span className="contact-kicker">LET'S WORK TOGETHER</span>
          <h2 id="contact-title">Have a project in mind?</h2>
          <p>
            Tell me what you are building. I will bring thoughtful design, clean code,
            and a clear plan to get it moving.
          </p>

          <div className="contact-details" aria-label="Contact information">
            {contactDetails.map((detail) => (
              <a className="contact-detail" href={detail.href} key={detail.label}>
                <span className="contact-detail-icon" aria-hidden="true">{detail.icon}</span>
                <span>
                  <small>{detail.label}</small>
                  <strong>{detail.value}</strong>
                </span>
                <span className="contact-detail-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} aria-describedby="contact-note">
          <div className="contact-form-heading">
            <span>START A CONVERSATION</span>
            <h3>Drop me a line</h3>
          </div>
          <label htmlFor="contact-name">
            Your name
            <input id="contact-name" name="name" type="text" placeholder="Your full name" autoComplete="name" aria-invalid="false" required />
          </label>
          <label htmlFor="contact-email">
            Email address
            <input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" aria-invalid="false" required />
          </label>
          <label htmlFor="contact-subject">
            Subject
            <input id="contact-subject" name="subject" type="text" placeholder="Project type or subject" aria-invalid="false" required />
          </label>
          <label htmlFor="contact-message">
            How can I help?
            <textarea id="contact-message" name="message" rows="4" placeholder="Tell me a little about your project..." aria-invalid="false" required />
          </label>
          <button type="submit" className="contact-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send inquiry'} <span aria-hidden="true">↗</span>
          </button>
          <p id="contact-note" className={`contact-note ${status.type}`} role="status">{status.message}</p>
        </form>
      </div>
    </section>
  )
}
