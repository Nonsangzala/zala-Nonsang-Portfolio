import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import contactRoutes from './routes/contactRoutes.js'
import { verifyMailer } from './config/mailer.js'

const app = express()
const port = Number(process.env.PORT) || 5000
const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173'

app.disable('x-powered-by')
app.use(helmet())
app.use(cors({ origin: clientUrl }))
app.use(express.json({ limit: '10kb' }))

app.get('/api/health', (_req, res) => {
  res.status(200).json({ success: true, message: 'Portfolio backend is running' })
})
app.use('/api/contact', contactRoutes)
app.use((_req, res) => res.status(404).json({ success: false, message: 'Route not found.' }))
app.use((error, _req, res, _next) => {
  console.error(`Unhandled server error: ${error instanceof Error ? error.message : 'unknown error'}`)
  res.status(500).json({ success: false, message: 'Unable to process your request right now.' })
})

app.listen(port, async () => {
  console.log(`Portfolio backend listening on port ${port}`)
  await verifyMailer()
})