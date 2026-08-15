import mongoose from 'mongoose'
import { connectDatabase } from '../server/lib/db.js'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: `Method ${req.method} not allowed.` })
  }

  try {
    await connectDatabase()
    return res.status(200).json({
      status: mongoose.connection.readyState === 1 ? 'ok' : 'degraded',
      service: 'portfolio-api',
      database: mongoose.connection.readyState === 1 ? 'mongodb' : 'disconnected',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Health check failed:', error.message)
    return res.status(503).json({
      status: 'degraded',
      service: 'portfolio-api',
      database: 'disconnected',
      timestamp: new Date().toISOString(),
    })
  }
}
