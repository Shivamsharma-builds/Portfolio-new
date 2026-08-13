import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

const FULL_TEXT = `I am a designer who codes.

For the past nine years I have made digital products, brand systems, and the occasional generative thing — for studios, founders, and institutions that care about how a thing feels as much as how it works.

My work begins with a long conversation and ends with a website, an app, or a system that can be read like a sentence: deliberate, finite, and quiet enough to be lived with.`

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const [text, setText] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!inView) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setText(FULL_TEXT.slice(0, i))
      if (i >= FULL_TEXT.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, 22)
    return () => clearInterval(interval)
  }, [inView])

  const lines = text.split('\n')

  return (
    <section ref={ref} id="about" className="about section">
      <div className="about-grid">
        <div className="about-left">
          <div className="mono section-label">— 02 / About</div>
          <h2 className="display about-title">
            A designer<br/>of restraint.
          </h2>
          <div className="mono about-meta">
            <div>Mira Castellan · Independent</div>
            <div>Lisbon · Nine years freelance</div>
            <div>Available Spring 2025</div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-text">
            {lines.map((line, i) => (
              <p key={i}>
                {line || '\u00A0'}
                {i === lines.length - 1 && (
                  <span className={`about-cursor ${done ? 'blink' : ''}`}>▌</span>
                )}
              </p>
            ))}
          </div>

          <div className="about-stats">
            <div className="stat">
              <div className="stat-num display">09</div>
              <div className="mono stat-label">Years freelance</div>
            </div>
            <div className="stat">
              <div className="stat-num display">62</div>
              <div className="mono stat-label">Projects shipped</div>
            </div>
            <div className="stat">
              <div className="stat-num display">14</div>
              <div className="mono stat-label">Talks given</div>
            </div>
            <div className="stat">
              <div className="stat-num display">04</div>
              <div className="mono stat-label">Languages spoken</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}