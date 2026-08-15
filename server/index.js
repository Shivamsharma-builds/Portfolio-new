import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { connectDatabase } from './lib/db.js'
import { ContactMessage } from './models/ContactMessage.js'
import { sendContactConfirmation } from './email.js'
import { clean, isValidEmail } from './lib/http.js'

const app = express()
const PORT = Number(process.env.PORT || 5000)
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173'

app.use(cors({ origin: CLIENT_ORIGIN, methods: ['GET', 'POST'] }))
app.use(express.json({ limit: '20kb' }))

app.get('/api/health', async (_req, res) => {
  try {
    await connectDatabase()
    return res.json({
      status: mongoose.connection.readyState === 1 ? 'ok' : 'degraded',
      service: 'portfolio-api',
      database: mongoose.connection.readyState === 1 ? 'mongodb' : 'disconnected',
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error(error)
    return res.status(503).json({ status: 'degraded', service: 'portfolio-api', database: 'disconnected' })
  }
})

app.get('/api/profile', (_req, res) => {
  res.json({
    name: process.env.PORTFOLIO_NAME || 'Shivam Sharma',
    email: process.env.CONTACT_EMAIL || 'shivam1234sharmabro@gmail.com',
    phone: process.env.CONTACT_PHONE || '7004942929',
    location: process.env.CONTACT_LOCATION || 'Jamtara (JH),815351',
    availability: process.env.CONTACT_AVAILABILITY || 'Open to opportunities',
    socials: {
      github: process.env.GITHUB_URL || 'https://github.com/Shivamsharma-builds',
      linkedin: process.env.LINKEDIN_URL || 'https://www.linkedin.com/in/shivam-sharma-332179357',
      twitter: process.env.TWITTER_URL || 'https://x.com/ShivamSharjmt23',
    },
  })
})

app.get('/api/projects', (_req, res) => {
  res.json([
    {
      id: 'portfolio',
      title: 'Personal Portfolio',
      description: 'Interactive portfolio with smooth scrolling, GSAP animations and a resume preview.',
      technologies: ['React', 'GSAP', 'Lenis', 'Framer Motion'],
    },
    {
      id: 'http-server',
      title: 'HTTP Web Server',
      description: 'C++ HTTP server supporting HTTP methods, cookies, CGI, uploads and non-blocking I/O.',
      technologies: ['C++', 'HTTP', 'Non-Blocking I/O'],
    },
  ])
})

app.post('/api/contact', async (req, res) => {
  try {
    const body = req.body && typeof req.body === 'object' ? req.body : {}
    if (clean(body.website, 200)) {
      return res.status(200).json({ success: true, message: 'Thanks! Your message has been received.', confirmationEmailSent: false })
    }

    const name = clean(body.name, 80)
    const email = clean(body.email, 160).toLowerCase()
    const subject = clean(body.subject, 160)
    const message = clean(body.message, 3000)

    if (!name || !email || !message) return res.status(400).json({ error: 'Name, email and message are required.' })
    if (!isValidEmail(email)) return res.status(400).json({ error: 'Please provide a valid email address.' })

    await connectDatabase()
    const normalizedSubject = subject || `Portfolio Contact from ${name}`
    const entry = await ContactMessage.create({ name, email, subject: normalizedSubject, message })

    let confirmationEmailSent = false
    try {
      await sendContactConfirmation({ name, email, subject: normalizedSubject })
      confirmationEmailSent = true
    } catch (emailError) {
      console.error('Confirmation email failed:', emailError.message)
    }

    return res.status(201).json({
      success: true,
      message: confirmationEmailSent
        ? 'Thanks! Your message has been received. A confirmation email has been sent to you.'
        : 'Thanks! Your message has been received. We could not send the confirmation email right now.',
      confirmationEmailSent,
      id: entry._id,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Unable to process your message right now. Please try again later.' })
  }
})

app.get('/api/resume', (_req, res) => res.redirect(302, '/resume.pdf'))

app.use((_req, res) => res.status(404).json({ error: 'API route not found.' }))

if (process.env.NODE_ENV !== 'production') {
  connectDatabase()
    .then(() => app.listen(PORT, () => console.log(`Portfolio API running on http://localhost:${PORT}`)))
    .catch((error) => {
      console.error('MongoDB connection failed:', error.message)
      process.exit(1)
    })
}

export default app
