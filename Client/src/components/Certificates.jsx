import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi'

const Certificates = () => {
  const certificates = [
    {
      title: 'Meta Front-End Developer Professional',
      issuer: 'Coursera',
      date: 'Mar 2024',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      credentialId: 'META-FE-2024-1234',
      link: '#'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Jan 2024',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      credentialId: 'AWS-CP-2024-5678',
      link: '#'
    },
    {
      title: 'Google UX Design Certificate',
      issuer: 'Google',
      date: 'Nov 2023',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      credentialId: 'GOOG-UX-2023-9012',
      link: '#'
    },
    {
      title: 'Python for Everybody Specialization',
      issuer: 'University of Michigan',
      date: 'Aug 2023',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop',
      credentialId: 'PY4E-2023-3456',
      link: '#'
    },
    {
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      date: 'Jun 2023',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
      credentialId: 'MDB-DEV-2023-7890',
      link: '#'
    },
    {
      title: 'Scrum Fundamentals Certified',
      issuer: 'SCRUMstudy',
      date: 'Apr 2023',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
      credentialId: 'SFC-2023-2345',
      link: '#'
    },
  ]

  return (
    <section id="certificates" className="py-20 px-6 section-fade">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Continuous learning is my passion. Here are some of the certifications I've earned.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="glass rounded-2xl overflow-hidden card-hover group">
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <FiAward className="text-white text-xl" />
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-cyan-400 font-semibold mb-3">{cert.issuer}</p>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <FiCalendar /> {cert.date}
                </div>

                <div className="glass rounded-lg p-3 mb-4">
                  <p className="text-xs text-gray-500">Credential ID</p>
                  <p className="text-sm text-gray-300 font-mono">{cert.credentialId}</p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2 glass rounded-lg text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-600 hover:text-white transition-all"
                >
                  <FiExternalLink /> View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates