import nodemailer from 'nodemailer'

const smtpConfigured = Boolean(
  process.env.SMTP_HOST &&
  process.env.SMTP_PORT &&
  process.env.SMTP_USER &&
  process.env.SMTP_PASS &&
  process.env.MAIL_FROM
)

const transporter = smtpConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null

const escapeHtml = (value) => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;')

export const sendContactConfirmation = async ({ name, email, subject }) => {
  if (!transporter) {
    throw new Error('SMTP email service is not configured.')
  }

  const safeName = escapeHtml(name)
  const safeSubject = escapeHtml(subject)

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: email,
    replyTo: process.env.CONTACT_EMAIL || process.env.MAIL_FROM,
    subject: 'Thanks for contacting me',
    text: `Hi ${name},\n\nThanks for reaching out through my portfolio. I have received your message${subject ? ` regarding "${subject}"` : ''} and will get back to you as soon as possible.\n\nBest regards,\n${process.env.PORTFOLIO_NAME || 'Portfolio Owner'}`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#222;max-width:620px;margin:auto">
        <h2 style="margin-bottom:8px">Thanks for reaching out, ${safeName}!</h2>
        <p>I’ve received your message through my portfolio${safeSubject ? ` regarding <strong>${safeSubject}</strong>` : ''}.</p>
        <p>I’ll review it and get back to you as soon as possible.</p>
        <p style="margin-top:28px">Best regards,<br><strong>${escapeHtml(process.env.PORTFOLIO_NAME || 'Portfolio Owner')}</strong></p>
      </div>
    `,
  })
}

export const verifyEmailTransport = async () => {
  if (!transporter) return false
  await transporter.verify()
  return true
}
