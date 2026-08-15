import { FiCalendar, FiMapPin, FiBook } from 'react-icons/fi'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Durgapur Institute of Advanced Technology and Management',
      duration: '2023 - 2027',
      location: 'Rajbandh, Durgapur, West Bengal (India)',
      grade: 'CGPA: 8.3/10 upto 6th semester',
      description: 'Specializing in Software Engineering and Artificial Intelligence. Active member of the Computer Science Society and Coding Club.',
      courses: ['Data Structures', 'Algorithms', 'Database Systems', 'Machine Learning', 'Web Development', 'Operating Systems']
    },
    {
      degree: 'Higher Secondary - Science Stream',
      institution: 'S.D D.A.V Public School',
      duration: '2022 - 2023',
      location: 'Jamtara, Jharkhand (India)',
      grade: '85%',
      description: 'Graduated with honors. Top 5% of the class with focus on Mathematics and Computer Science.',
      courses: ['Advanced Mathematics', 'Physics', 'Computer Science', 'Chemistry']
    },
  ]

  return (
    <section id="education" className="py-20 px-6 section-fade gsap-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent"></div>
              )}
              
              <div className="glass rounded-2xl p-8 mb-8 ml-0 md:ml-20 card-hover relative education-card">
                {/* Timeline dot */}
                <div className="absolute -left-14 top-8 w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center hidden md:flex">
                  <FiBook className="text-white" />
                </div>

                <div className="flex flex-wrap items-start justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-purple-400 font-semibold">{edu.institution}</p>
                  </div>
                  <div className="glass px-4 py-2 rounded-full">
                    <span className="text-cyan-400 font-semibold text-sm">{edu.grade}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-2">
                    <FiCalendar /> {edu.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <FiMapPin /> {edu.location}
                  </span>
                </div>

                <p className="text-gray-400 mb-4">{edu.description}</p>

                <div>
                  <h4 className="text-sm text-gray-500 mb-2">Key Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="px-3 py-1 glass rounded-full text-xs text-gray-300">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education