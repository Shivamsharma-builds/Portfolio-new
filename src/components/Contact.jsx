import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiClock } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  })

  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (submitting) return

    setSubmitting(true)
    setStatus('Sending...')
    setStatusType('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.error || 'Unable to send your message. Please try again.'
        )
      }

      setStatus(data.message || 'Message sent successfully!')
      setStatusType('success')

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        website: '',
      })
    } catch (error) {
      setStatus(
        error.message || 'Something went wrong. Please try again later.'
      )
      setStatusType('error')
    } finally {
      setSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'shivam1234sharmabro@gmail.com',
      href: 'mailto:shivam1234sharmabro@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 7004942929',
      href: 'tel:+917004942929',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Jamtara, Jharkhand (India)',
      href: '#contact',
    },
    {
      icon: FiClock,
      label: 'Available',
      value: 'Mon - Fri, 9AM - 6PM',
      href: '#contact',
    },
  ]

  const socialLinks = [
    {
      Icon: FaGithub,
      href: 'https://github.com/Shivamsharma-builds',
      label: 'GitHub',
      color: 'hover:bg-gray-700',
    },
    {
      Icon: FaLinkedin,
      href: 'https://linkedin.com/in/shivam-sharma-332179357',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600',
    },
    {
      Icon: FaTwitter,
      href: 'https://twitter.com/ShivamSharjmt23',
      label: 'Twitter',
      color: 'hover:bg-cyan-500',
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 px-6 section-fade gsap-section"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              Contact Information
            </h3>

            <p className="text-gray-400 mb-8">
              I'm always open to discussing new opportunities,
              collaborations, or just a friendly chat. Don't hesitate to
              reach out!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => {
                const Icon = info.icon

                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 glass rounded-xl p-4 card-hover"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white text-xl" />
                    </div>

                    <div>
                      <p className="text-gray-500 text-sm">
                        {info.label}
                      </p>

                      <p className="text-white font-semibold">
                        {info.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-500 text-sm mb-3">
                Follow me on:
              </p>

              <div className="flex gap-3">
                {socialLinks.map(
                  ({ Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-12 h-12 glass rounded-xl flex items-center justify-center text-xl text-gray-400 hover:text-white transition-all ${color}`}
                    >
                      <Icon />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Send Me a Message
            </h3>

            {/* Status */}
            {status && (
              <div
                className={`mb-4 p-4 rounded-xl text-sm border ${
                  statusType === 'success'
                    ? 'bg-green-500/10 border-green-500/30 text-green-400'
                    : statusType === 'error'
                      ? 'bg-red-500/10 border-red-500/30 text-red-400'
                      : 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                }`}
              >
                {statusType === 'success' && '✅ '}
                {statusType === 'error' && '❌ '}
                {statusType === 'loading' && '⏳ '}
                {status}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-gray-400 text-sm mb-2"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  autoComplete="name"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Shivam Sharma"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-gray-400 text-sm mb-2"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={150}
                  autoComplete="email"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="shivam@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-gray-400 text-sm mb-2"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  maxLength={200}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Let's work together!"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-gray-400 text-sm mb-2"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={5000}
                  rows={5}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Honeypot anti-bot field */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                className="hidden"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <FiSend />

                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact