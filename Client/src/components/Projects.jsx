import { useInView } from '../hooks/useInView'

const PROJECTS = [
  { id: 'field-notes-app',     title: 'Field Notes',        year: '2024', role: 'Product Design',  span: 'col-span-2 row-span-2' },
  { id: 'maren-type-specimen', title: 'Maren Type',         year: '2024', role: 'Type · Web',      span: 'row-span-2' },
  { id: 'atlas-weather',       title: 'Atlas Weather',      year: '2023', role: 'Product · Dev',   span: 'col-span-2' },
  { id: 'quintal-identity',    title: 'Quintal',            year: '2023', role: 'Brand Identity',  span: '' },
  { id: 'slow-reader-concept', title: 'Slow Reader',        year: '2023', role: 'Concept · UI',    span: '' },
  { id: 'klint-festival-site', title: 'Klint Festival',     year: '2022', role: 'Microsite · Dev', span: 'row-span-2' },
  { id: 'vela-studio-site',    title: 'Vela Studio',        year: '2022', role: 'Web · Brand',     span: '' },
  { id: 'ostro-podcast-app',   title: 'Ostro',              year: '2022', role: 'Product Design',  span: '' },
  { id: 'meridian-archive',    title: 'Meridian Archive',   year: '2021', role: 'Personal',        span: '' },
]

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} id="projects" className="projects section">
      <div className="projects-inner">
        <div className="projects-header">
          <div className="mono section-label">— 03 / Selected Work</div>
          <h2 className="display projects-title">
            Nine projects,<br/>one method.
          </h2>
          <p className="projects-intro">
            A selection from the past four years — product design, brand identity,
            and creative development. Each project is the result of an extended
            conversation between brief, material, and the people who will use the result.
            Hover to see the work in colour.
          </p>
        </div>

        <div className={`mosaic ${inView ? 'in-view' : ''}`}>
          {PROJECTS.map((p, i) => (
            <article key={p.id} className={`mosaic-tile ${p.span}`}
              style={{ transitionDelay: `${i * 55}ms` }}>
              <div className="mosaic-tile-inner">
                <img src={`https://picsum.photos/seed/${p.id}/800/800`} alt={p.title} loading="lazy" />
                <div className="mosaic-tile-meta">
                  <div className="mosaic-tile-title display">{p.title}</div>
                  <div className="mono mosaic-tile-info">
                    <span>{p.role}</span>
                    <span>·</span>
                    <span>{p.year}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-footer">
          <a href="#contact" className="projects-link mono">
            <span>View the full archive — 62 projects</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}