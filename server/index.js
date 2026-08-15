import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import mongoose from 'mongoose'
import { sendContactConfirmation } from './email.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const PORT = Number(process.env.PORT || 5000)
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173'
const RESUME_FILE = path.join(__dirname, '..', 'public', 'resume.pdf')

app.use(cors({ origin: CLIENT_ORIGIN, methods: ['GET', 'POST'] }))
app.use(express.json({ limit: '20kb' }))

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    subject: { type: String, trim: true, maxlength: 160, default: '' },
    message: { type: String, required: true, trim: true, maxlength: 3000 },
  },
  { timestamps: true }
)

const ContactMessage = mongoose.model('ContactMessage', contactSchema)

const clean = (value, maxLength) => String(value ?? '').trim().slice(0, maxLength)

app.get('/api/health', (_req, res) => {
  res.json({
    status: mongoose.connection.readyState === 1 ? 'ok' : 'degraded',
    service: 'portfolio-api',
    database: mongoose.connection.readyState === 1 ? 'mongodb' : 'disconnected',
    timestamp: new Date().toISOString(),
  })
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

app.post('/api/contact', async (req, res, next) => {
  try {
    const name = clean(req.body.name, 80)
    const email = clean(req.body.email, 160)
    const subject = clean(req.body.subject, 160)
    const message = clean(req.body.message, 3000)

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required.' })
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailIsValid) {
      return res.status(400).json({ error: 'Please provide a valid email address.' })
    }

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ error: 'Database is unavailable. Please try again later.' })
    }

    const normalizedSubject = subject || `Portfolio Contact from ${name}`

    const entry = await ContactMessage.create({
      name,
      email,
      subject: normalizedSubject,
      message,
    })

    let confirmationEmailSent = false
    try {
      await sendContactConfirmation({
        name,
        email,
        subject: normalizedSubject,
      })
      confirmationEmailSent = true
    } catch (emailError) {
      // The contact is already stored, so an email provider failure should not
      // make the user submit the form again. Log it for the site owner.
      console.error('Confirmation email failed:', emailError.message)
    }

    res.status(201).json({
      success: true,
      message: confirmationEmailSent
        ? 'Thanks! Your message has been received. A confirmation email has been sent to you.'
        : 'Thanks! Your message has been received. We could not send the confirmation email right now.',
      confirmationEmailSent,
      id: entry._id,
    })
  } catch (error) {
    next(error)
  }
})

app.get('/api/resume', (_req, res) => {
  res.sendFile(RESUME_FILE, (error) => {
    if (error && !res.headersSent) {
      res.status(error.statusCode || 404).json({
        error: 'Resume PDF not found. Add public/resume.pdf to the project.',
      })
    }
  })
})

app.use((err, _req, res, _next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error.' })
})

const startServer = async () => {
  const mongoUri = process.env.MONGODB_URI

  if (!mongoUri || mongoUri.includes('<db_password>')) {
    console.error('Missing MONGODB_URI. Add your MongoDB Atlas URI to .env and replace <db_password>.')
    process.exit(1)
  }

  try {
    await mongoose.connect(mongoUri, {
      dbName: process.env.MONGODB_DB_NAME || 'portfolio',
      serverSelectionTimeoutMS: 10000,
    })

    console.log(`MongoDB connected: ${mongoose.connection.host}`)
    app.listen(PORT, () => {
      console.log(`Portfolio API running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('MongoDB connection failed:', error.message)
    process.exit(1)
  }
}

startServer()
