const ITEMS = [
  'Available for new projects — Spring 2025',
  'Speaking at OFFF Barcelona · May 14',
  'Field Notes featured on SiteInspire',
  'New essay — On the patience of interfaces',
  'Now writing from Lisbon, available worldwide',
  'Selected for the 2025 Brand New Awards'
]

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="marquee-item mono">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}