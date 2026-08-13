import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const ROWS = 6
const COLS = 8
const ACCENT_CELLS = [
  { r: 0, c: 2 }, { r: 1, c: 6 }, { r: 2, c: 0 },
  { r: 3, c: 4 }, { r: 4, c: 7 }, { r: 5, c: 3 }
]

export default function Hero() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cells = gsap.utils.toArray('.hero-cell')
      gsap.fromTo(cells,
        { rotateX: 90, y: -100, opacity: 0 },
        { rotateX: 0, y: 0, opacity: 1, duration: 1.2,
          stagger: { each: 0.04, from: 'random' },
          ease: 'expo.out', delay: 0.25 })

      gsap.fromTo('.hero-text-el',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.4, ease: 'power3.out',
          stagger: 0.12, delay: 1.4 })

      const onScroll = () => {
        const y = window.scrollY
        if (y < window.innerHeight) {
          gsap.set('.hero-overlay', { y: y * 0.35 })
          gsap.set('.hero-grid', { y: y * 0.12, opacity: 1 - (y / window.innerHeight) * 0.6 })
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }, root)
    return () => ctx.revert()
  }, [])

  const cells = []
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const isAccent = ACCENT_CELLS.some(p => p.r === r && p.c === c)
      cells.push(
        <div key={`${r}-${c}`} className="hero-cell">
          {isAccent ? (
            <div className="hero-cell-accent" />
          ) : (
            <div className="hero-cell-img" style={{
              backgroundImage: `url(https://picsum.photos/seed/mira-hero-portrait/1920/1080)`,
              backgroundPosition: `${c/(COLS-1)*100}% ${r/(ROWS-1)*100}%`,
              backgroundSize: `${COLS*100}% ${ROWS*100}%`
            }} />
          )}
        </div>
      )
    }
  }

  return (
    <section ref={root} id="top" className="hero">
      <div className="hero-grid">{cells}</div>
      <div className="hero-overlay">
        <div className="hero-overlay-top">
          <div className="mono hero-text-el">— Portfolio · 2025</div>
          <div className="mono hero-text-el">Lisbon · 38.7°N · 9.1°W</div>
        </div>

        <div className="hero-overlay-bottom">
          <div className="hero-title-block">
            <div className="display hero-title hero-text-el">
              Mira<br/>Castellan<span className="hero-title-dot">.</span>
            </div>
            <div className="mono hero-sub hero-text-el">
              Designer & Developer · Available Spring 2025
            </div>
          </div>
          <div className="hero-scroll hero-text-el">
            <div className="mono">Scroll</div>
            <div className="hero-scroll-line" />
          </div>
        </div>
      </div>
    </section>
  )
}