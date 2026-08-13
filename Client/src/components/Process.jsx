import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useInView } from '../hooks/useInView'

const STEPS = [
  {
    num: '01', name: 'Listen',
    desc: 'Long-form interviews, competitive audit, archival research into the category. I spend the first week not drawing — only listening, photographing, sitting with the problem until I can describe it back to you in my own words.',
    duration: '1—2 weeks',
    image: 'process-listen-notebook'
  },
  {
    num: '02', name: 'Sketch',
    desc: 'Wireframes, moodboards, type tests, rough prototypes in code. The work is small, fast, and ugly on purpose. Nothing is polished until the direction is agreed — the polish is the easy part, finding the direction is the hard part.',
    duration: '2—4 weeks',
    image: 'process-sketch-wireframes'
  },
  {
    num: '03', name: 'Build',
    desc: 'High-fidelity design files, working code, weekly demos. I build in public — you see the work as it happens, not at the end. Every detail is reviewed against the brief before it ships.',
    duration: '4—12 weeks',
    image: 'process-build-screen'
  },
  {
    num: '04', name: 'Ship',
    desc: 'Launch, measure, iterate. I stay on for six weeks after launch — fixing, refining, watching how people actually use the thing. The conversation continues — I don\'t disappear when the invoice is paid.',
    duration: '6 weeks support',
    image: 'process-ship-launch'
  }
]

const DIRS = [
  'inset(0 100% 0 0)',
  'inset(0 0 100% 0)',
  'inset(0 0 0 100%)',
  'inset(100% 0 0 0)',
]

export default function Process() {
  const [ref, inView] = useInView({ threshold: 0.15 })
  const root = useRef(null)

  useEffect(() => {
    if (!inView) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.proc-step').forEach((step, i) => {
        const img = step.querySelector('.proc-step-img')
        const imgInner = img.querySelector('img')
        const text = step.querySelectorAll('.proc-step-text > *')

        gsap.fromTo(img,
          { clipPath: DIRS[i % DIRS.length] },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'power4.inOut', delay: i * 0.15 })

        gsap.fromTo(imgInner,
          { scale: 1.3 },
          { scale: 1.05, duration: 1.6, ease: 'power3.out', delay: i * 0.15 })

        gsap.fromTo(text,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.08, delay: i * 0.15 + 0.3 })
      })
    }, root)
    return () => ctx.revert()
  }, [inView])

  return (
    <section ref={root} id="process" className="process section">
      <div ref={ref} className="process-inner">
        <div className="process-header">
          <div className="mono section-label">— 05 / How I Work</div>
          <h2 className="display process-title">
            Four movements,<br/>in order.
          </h2>
        </div>

        <div className="process-steps">
          {STEPS.map((step) => (
            <div key={step.num} className="proc-step">
              <div className="proc-step-left">
                <div className="proc-step-num mono">{step.num}</div>
                <h3 className="display proc-step-name">{step.name}</h3>
                <div className="mono proc-step-meta">{step.duration}</div>
              </div>

              <div className="proc-step-right">
                <div className="proc-step-img">
                  <img src={`https://picsum.photos/seed/${step.image}/1000/700`} alt={step.name} loading="lazy" />
                </div>
                <div className="proc-step-text">
                  <p className="proc-step-desc">{step.desc}</p>
                  <div className="mono proc-step-marker">— End of movement {step.num}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}