const SKILLS = [
  {
    name: 'Product Design',
    desc: 'End-to-end UX and UI for digital products — from first user interview through high-fidelity prototype. I work in Figma, sketchbooks, and code. The output is a system, not a screen.',
    tags: ['UX Research', 'Figma', 'Prototyping', 'Design Systems']
  },
  {
    name: 'Creative Development',
    desc: 'React, TypeScript, GSAP, Three.js, WebGL, shaders. Hand-coded, performant, accessible. I build the things I design — no handoff gap, no compromises in translation.',
    tags: ['React', 'GSAP', 'WebGL', 'TypeScript']
  },
  {
    name: 'Brand Identity',
    desc: 'Marks, type direction, colour systems, and the verbal voice that surrounds them. Identity work for founders, studios, and small institutions that need to look like themselves.',
    tags: ['Identity', 'Type Direction', 'Art Direction']
  },
  {
    name: 'Motion Design',
    desc: 'Micro-interactions, transitions, scroll choreography. Motion that serves comprehension rather than performance. The patient kind — the kind you don\'t notice until it\'s gone.',
    tags: ['After Effects', 'GSAP', 'Lottie', 'Interaction']
  },
  {
    name: 'Art Direction',
    desc: 'Photography direction, editorial layout, and the slow work of building a visual language over time. For brands that publish, not just brands that advertise.',
    tags: ['Editorial', 'Photography', 'Layout']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="skills-inner">
        <div className="skills-header">
          <div className="mono section-label">— 04 / What I Do</div>
          <h2 className="display skills-title">
            Five disciplines,<br/>one pair of hands.
          </h2>
        </div>

        <div className="skills-list">
          {SKILLS.map((skill, i) => (
            <article key={i} className="skill-row">
              <div className="skill-row-num mono">0{i + 1}</div>
              <div className="skill-row-name display">{skill.name}</div>
              <div className="skill-row-desc">
                <p>{skill.desc}</p>
                <div className="skill-row-tags mono">
                  {skill.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}