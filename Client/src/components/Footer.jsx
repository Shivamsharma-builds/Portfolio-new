import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useInView } from '../hooks/useInView'

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const root = useRef(null)
  const [time, setTime] = useState('—:—')

  useEffect(() => {
    const update = () => {
      const lisbon = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Europe/Lisbon', hour: '2-digit', minute: '2-digit'
      })
      setTime(lisbon)
    }
    update()
    const t = setInterval(update, 30 * 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (!inView) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-line',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', stagger: 0.1 })
      gsap.fromTo('.footer-col',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.08, delay: 0.5 })
    }, root)
    return () => ctx.revert()
  }, [inView])

  return (
    <footer ref={root} id="contact" className="footer section">
      <div className="footer-inner">
        <div className="mono section-label">— 07 / Contact</div>

        <h2 className="display footer-title">
          <span className="footer-line">Let\'s make</span><br/>
          <span className="footer-line">something good<span className="footer-title-dot">.</span></span>
        </h2>

        <a href="mailto:hello@miracastellan.com" className="footer-cta mono footer-line">
          <span>hello@miracastellan.com</span>
          <span>→</span>
        </a>

        <div className="footer-grid">
          <div className="footer-col">
            <div className="mono footer-col-label">Based in</div>
            <p>
              Rua das Janelas Verdes 32<br/>
              1200-690 Lisbon<br/>
              Portugal
            </p>
          </div>
          <div className="footer-col">
            <div className="mono footer-col-label">Direct</div>
            <p>
              <a href="mailto:hello@miracastellan.com">hello@miracastellan.com</a><br/>
              +351 91 234 5678<br/>
              Mon—Fri, 09:00—18:00 WET
            </p>
          </div>
          <div className="footer-col">
            <div className="mono footer-col-label">Elsewhere</div>
            <ul className="footer-list">
              <li><a href="#">Instagram — @mira.castellan</a></li>
              <li><a href="#">Are.na — /mira-castellan</a></li>
              <li><a href="#">Read.cv — /miracastellan</a></li>
              <li><a href="#">GitHub — @miracastellan</a></li>
              <li><a href="#">Newsletter — monthly</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="mono footer-col-label">Local time</div>
            <p>
              Lisbon · {time}<br/>
              38.7223° N, 9.1393° W<br/>
              Next opening · April 14
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="mono">© 2025 Mira Castellan</div>
          <div className="mono">All rights reserved · No reproduction without written consent</div>
          <div className="mono">Designed & built in Lisbon · React + Vite + GSAP</div>
        </div>
      </div>
    </footer>
  )
}