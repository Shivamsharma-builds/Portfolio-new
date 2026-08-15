const projects = [
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
]

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: `Method ${req.method} not allowed.` })
  }

  return res.status(200).json(projects)
}
