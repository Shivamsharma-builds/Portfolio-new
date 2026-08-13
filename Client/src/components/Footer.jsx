import { FiHeart, FiDownload, FiArrowUp } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="glass border-t border-white/5 py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">&lt;Portfolio/&gt;</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Computer Science Student & Full Stack Developer passionate about building 
              innovative web solutions and exploring new technologies.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              <FiDownload /> Download Resume
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    → {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Connect With Me</h4>
            <div className="flex gap-3 mb-4">
              {[
                { Icon: FaGithub, href: 'https://github.com', color: 'hover:bg-gray-700' },
                { Icon: FaLinkedin, href: 'https://linkedin.com', color: 'hover:bg-blue-600' },
                { Icon: FaTwitter, href: 'https://twitter.com', color: 'hover:bg-cyan-500' },
                { Icon: FaInstagram, href: 'https://instagram.com', color: 'hover:bg-pink-600' },
              ].map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all ${color}`}
                >
                  <Icon />
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              📧 john@example.com<br />
              📱 +1 (555) 123-4567
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {currentYear} John Doe. Made with <FiHeart className="text-red-500" /> and React.
          </p>
          <a
            href="#home"
            className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
          >
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer