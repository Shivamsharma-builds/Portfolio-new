import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'

const Navbar = () => {
  const openResume = (event) => {
    event.preventDefault()
    window.dispatchEvent(new Event('open-resume'))
    setIsOpen(false)
  }
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`gsap-navbar fixed top-0 w-full z-50 transition-all duration-300 navbar-glass ${
      scrolled ? 'py-3' : 'py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold gradient-text">
          &lt;Portfolio/&gt;
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-purple-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a
            href="/resume.pdf"
            onClick={openResume}
            className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            <FiDownload /> Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass mt-3 mx-4 rounded-2xl p-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              onClick={openResume}
              className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold mt-2"
            >
              <FiDownload /> Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar