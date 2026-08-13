import { FiCalendar, FiBriefcase } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineering Intern',
      company: 'Tech Innovations Inc.',
      duration: 'Jun 2024 - Aug 2024',
      type: 'Internship',
      description: 'Worked on developing and maintaining web applications using React and Node.js. Collaborated with a team of 5 engineers to deliver features ahead of schedule.',
      achievements: [
        'Developed responsive UI components reducing page load time by 30%',
        'Implemented RESTful APIs serving 10,000+ daily requests',
        'Contributed to code reviews and mentored 2 junior interns'
      ]
    },
    {
      role: 'Web Developer (Freelance)',
      company: 'Self-Employed',
      duration: 'Jan 2023 - Present',
      type: 'Freelance',
      description: 'Designed and developed custom websites for small businesses and personal portfolios.',
      achievements: [
        'Delivered 10+ client websites with 100% satisfaction rate',
        'Built an e-commerce platform generating $50K+ in client revenue',
        'Established long-term relationships with 5 recurring clients'
      ]
    },
    {
      role: 'Teaching Assistant - Data Structures',
      company: 'Stanford University',
      duration: 'Aug 2023 - Dec 2023',
      type: 'Part-time',
      description: 'Assisted professor in teaching data structures course to 100+ undergraduate students.',
      achievements: [
        'Conducted weekly lab sessions and office hours',
        'Graded assignments and provided constructive feedback',
        'Created supplementary study materials improving pass rate by 15%'
      ]
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 section-fade">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-transparent"></div>
              )}
              
              <div className="glass rounded-2xl p-8 mb-8 ml-0 md:ml-20 card-hover relative">
                <div className="absolute -left-14 top-8 w-8 h-8 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center hidden md:flex">
                  <FiBriefcase className="text-white" />
                </div>

                <div className="flex flex-wrap items-start justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-cyan-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-xs text-purple-300">
                    {exp.type}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                  <FiCalendar /> {exp.duration}
                </div>

                <p className="text-gray-400 mb-4">{exp.description}</p>

                <div>
                  <h4 className="text-sm text-gray-500 mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-cyan-400 mt-1">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience