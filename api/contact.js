import { connectDatabase } from '../server/lib/db.js'
import { ContactMessage } from '../server/models/ContactMessage.js'
import { sendContactConfirmation } from '../server/email.js'
import { clean, isValidEmail } from '../server/lib/http.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: `Method ${req.method} not allowed.` })
  }

  try {
    const body = req.body && typeof req.body === 'object' ? req.body : {}

    // Honeypot field: real users never see this field. Bots often fill it.
    if (clean(body.website, 200)) {
      return res.status(200).json({
        success: true,
        message: 'Thanks! Your message has been received.',
        confirmationEmailSent: false,
      })
    }

    const name = clean(body.name, 80)
    const email = clean(body.email, 160).toLowerCase()
    const subject = clean(body.subject, 160)
    const message = clean(body.message, 3000)

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required.' })
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' })
    }

    await connectDatabase()

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
    console.error('Contact API failed:', error)
    return res.status(500).json({ error: 'Unable to process your message right now. Please try again later.' })
  }
}
