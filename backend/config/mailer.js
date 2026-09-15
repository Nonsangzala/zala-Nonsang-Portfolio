import nodemailer from 'nodemailer'

const smtpPort = Number(process.env.SMTP_PORT || 587)

export const mailerConfig = {
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
}

export const transporter = nodemailer.createTransport(mailerConfig)

export async function verifyMailer() {
  const required = [
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_USER',
    'SMTP_PASSWORD',
    'MAIL_FROM',
    'MAIL_TO'
  ]
  const missing = required.filter((name) => !process.env[name])

  if (missing.length > 0) {
    console.error(`SMTP configuration incomplete. Missing: ${missing.join(', ')}`)
    return false
  }

  try {
    await transporter.verify()
    console.log('SMTP configuration verified successfully.')
    return true
  } catch (error) {
    console.error(`SMTP verification failed: ${error instanceof Error ? error.message : 'unknown error'}`)
    return false
  }
}