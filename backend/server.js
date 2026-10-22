import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import contactRoutes from './routes/contactRoutes.js'
import { pool, initializeDatabase } from './config/database.js'


const app = express()
const port = Number(process.env.PORT) || 5000
const productionOrigin = 'https://zala-nonsang-portfolio-ibwazbhcg-zala-nonsang-portfolio.vercel.app'
const allowedOrigins = new Set([
  ...(process.env.CLIENT_URL || '').split(',').map((origin) => origin.trim()).filter(Boolean),
  ...(process.env.NODE_ENV !== 'production' ? ['http://localhost:5173'] : []),
  ...(process.env.NODE_ENV === 'production' && !process.env.CLIENT_URL ? [productionOrigin] : [])
])

app.disable('x-powered-by')
app.use(helmet())
app.use(cors({ origin(origin, callback) {
  if (!origin || allowedOrigins.has(origin)) return callback(null, true)
  return callback(new Error('Origin is not allowed by CORS.'))
} }))
app.use(express.json({ limit: '10kb' }))

app.get('/api/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1')
    res.status(200).json({ success: true, status: 'ok', database: 'connected' })
  } catch {
    res.status(503).json({ success: false, status: 'degraded', database: 'unavailable' })
  }
})
app.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    message: 'Portfolio Contact Backend is running!'
  })
})
app.use('/api/contact', contactRoutes)
app.use((_req, res) => res.status(404).json({ success: false, message: 'Route not found.' }))
app.use((error, _req, res, _next) => {
  console.error(`Unhandled server error: ${error instanceof Error ? error.message : 'unknown error'}`)
  res.status(500).json({ success: false, message: 'Unable to process your request right now.' })
})

if (process.env.NODE_ENV !== 'test') {
  initializeDatabase().then(() => {
    app.listen(port, () => console.log(`Portfolio backend listening on port ${port}`))
  }).catch((error) => {
    console.error(`Database initialization failed: ${error instanceof Error ? error.message : 'unknown error'}`)
    app.listen(port, () => console.error(`Portfolio backend listening without database on port ${port}`))
  })
}

export default app
