import { SiReact, SiJavascript, SiPython, SiNodedotjs, SiTailwindcss, SiMongodb, SiGit, SiFigma, SiDocker, SiTypescript } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90, icon: SiReact, color: 'text-cyan-400' },
        { name: 'JavaScript', level: 85, icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss, color: 'text-teal-400' },
        { name: 'TypeScript', level: 75, icon: SiTypescript, color: 'text-blue-400' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80, icon: SiNodedotjs, color: 'text-green-400' },
        { name: 'Python', level: 82, icon: SiPython, color: 'text-blue-400' },
        { name: 'MongoDB', level: 75, icon: SiMongodb, color: 'text-green-500' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 85, icon: SiGit, color: 'text-orange-400' },
        { name: 'Figma', level: 70, icon: SiFigma, color: 'text-pink-400' },
        { name: 'Docker', level: 65, icon: SiDocker, color: 'text-blue-400' },
      ]
    }
  ]

  const additionalSkills = ['C++', 'Java', 'SQL', 'REST APIs', 'GraphQL', 'AWS', 'Linux', 'Agile', 'Problem Solving', 'Team Leadership']

  return (
    <section id="skills" className="py-20 px-6 section-fade gsap-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="glass rounded-2xl p-6 card-hover">
              <h3 className="text-xl font-bold mb-6 text-purple-400">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className={`text-xl ${skill.color}`} />
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 glass rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-6 text-center text-purple-400">Other Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 glass rounded-full text-gray-300 text-sm hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 hover:text-white transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills