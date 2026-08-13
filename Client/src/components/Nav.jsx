import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-brand mono">
          <span className="nav-brand-dot" />
          Mira Castellan
        </a>
        <div className="nav-links">
          <a href="#projects" className="mono">Work</a>
          <a href="#about" className="mono">About</a>
          <a href="#skills" className="mono">Skills</a>
          <a href="#process" className="mono">Process</a>
          <a href="#writing" className="mono">Writing</a>
          <a href="#contact" className="mono nav-contact">Contact →</a>
        </div>
      </div>
    </nav>
  )
}