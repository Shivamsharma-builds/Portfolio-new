import { useInView } from '../hooks/useInView'

const ENTRIES = [
  {
    id: 'writing-patience',
    title: 'On the patience of interfaces',
    date: 'Mar 2025', category: 'Essay',
    excerpt: 'A note on interfaces that don\'t demand immediate response — the kind that let you finish a thought before asking for the next one. Drawn from six months of using a notes app that refused to autocomplete.'
  },
  {
    id: 'writing-scroll',
    title: 'Scroll choreography, seven variations',
    date: 'Feb 2025', category: 'Study',
    excerpt: 'A study of seven ways to choreograph scroll-triggered motion, drawn from projects across the past three years. Each variation is annotated with the easing curve and the trigger threshold that makes it feel right.'
  },
  {
    id: 'writing-portfolio',
    title: 'The portfolio as a slow building',
    date: 'Jan 2025', category: 'Essay',
    excerpt: 'On building a portfolio the way an architect builds a house — meant to last, meant to be inhabited, meant to be added to over time rather than replaced every two years.'
  },
  {
    id: 'writing-buttons',
    title: 'Three buttons in a row',
    date: 'Dec 2024', category: 'Detail',
    excerpt: 'Photographs of three buttons I designed between 2022 and 2024, each accompanied by a note on the radius, the padding, and the hour of the morning the decision was finally made.'
  }
]

export default function Writing() {
  const [ref, inView] = useInView({ threshold: 0.12 })

  return (
    <section ref={ref} id="writing" className="writing section">
      <div className="writing-inner">
        <div className="writing-header">
          <div>
            <div className="mono section-label">— 06 / Writing</div>
            <h2 className="display writing-title">Recent field notes.</h2>
          </div>
          <a href="#" className="mono writing-all">All entries — 38 →</a>
        </div>

        <div className={`writing-grid ${inView ? 'in-view' : ''}`}>
          {ENTRIES.map((entry, i) => (
            <article key={entry.id} className="writing-entry"
              style={{ transitionDelay: `${i * 110}ms` }}>
              <div className="writing-frame">
                <img src={`https://picsum.photos/seed/${entry.id}/700/900`} alt={entry.title} loading="lazy" />
              </div>
              <div className="writing-meta">
                <div className="mono writing-cat">{entry.category} · {entry.date}</div>
                <h3 className="display writing-entry-title">{entry.title}</h3>
                <p className="writing-excerpt">{entry.excerpt}</p>
                <a href="#" className="mono writing-read">Read entry →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}