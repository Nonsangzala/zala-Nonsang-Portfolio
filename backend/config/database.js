import pg from 'pg'

const { Pool } = pg
export const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined })
  : { query: async () => { throw new Error('DATABASE_URL is not configured') } }

export async function initializeDatabase() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not configured')
  await pool.query(`CREATE TABLE IF NOT EXISTS contact_inquiries (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(254) NOT NULL,
    subject VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`)
}
