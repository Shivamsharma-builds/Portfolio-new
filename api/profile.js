export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: `Method ${req.method} not allowed.` })
  }

  return res.status(200).json({
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
}
