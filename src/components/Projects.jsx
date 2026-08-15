import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const projects = [
  {
    title: 'OutreachX',
    description:
      'An agentic AI campaign automation platform with multi-step workflow orchestration for WhatsApp, voice notes, and AI phone calls. Includes RAG-based document-grounded replies and real-time campaign analytics.',
    image: '/images/outreachx.png',
    tags: [
      'Next.js',
      'Node.js',
      'Firebase',
      'LangChain',
      'OpenRouter',
      'VAPI',
      'Twilio',
      'Pinecone'
    ],
    github: 'https://github.com',
    demo: 'https://outreachx.com',
    featured: true
  },

  {
    title: 'Avento',
    description:
      'A RAG-powered customer support SaaS that enables businesses to deploy context-aware chatbot widgets on Framer and custom websites. Features document ingestion, chatbot analytics, knowledge-gap detection, branding controls, and AI voice support.',
    image: '/images/avento.png',
    tags: [
      'Next.js 15',
      'MongoDB Atlas',
      'Pinecone',
      'OpenRouter',
      'Clerk',
      'RAG'
    ],
    github: 'https://github.com',
    demo: 'https://avento.com',
    featured: true
  },

  {
    title: 'Perception',
    description:
      'A multilingual social sentiment intelligence platform for brand monitoring. It ingests social media mentions, classifies posts using an LLM-powered CX triage engine, and provides conversational analytics with chart-backed insights.',
    image: '/images/perception.png',
    tags: [
      'Next.js',
      'FastAPI',
      'MongoDB',
      'Apify',
      'LangChain',
      'LLM'
    ],
    github: 'https://github.com',
    demo: 'https://perception.com',
    featured: true
  },

  {
    title: 'Gatherly',
    description:
      'A full-stack event management platform that allows organizers to create events, manage RSVPs, publish public event pages, and handle attendee approval workflows with integrated transactional emails and Zoom meeting synchronization.',
    image: '/images/gatherly.png',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'MongoDB',
      'Mongoose',
      'Clerk',
      'Nodemailer',
      'Zoom OAuth'
    ],
    github: 'https://github.com',
    demo: 'https://gatherly.com',
    featured: true
  },

  {
    title: 'Crop Prediction Using AI',
    description:
      'An AI-based agricultural prediction system that recommends suitable crop types and expected yield based on environmental and soil parameters, helping improve agricultural productivity and reduce crop failure risk.',
    image: '/images/crop-prediction.png',
    tags: [
      'Gen AI',
      'MERN Stack',
      'MongoDB',
      'React',
      'Node.js'
    ],
    github: 'https://github.com/Shivamsharma-builds/Hacktopus-Tech-Triran',
    demo: 'https://ai-crop-prediction.onrender.com',
    featured: false
  },

  {
    title: 'HTTP Web Server',
    description:
      'A C++ HTTP server supporting GET, POST, and DELETE methods, cookies, CGI, file uploads and downloads, and static content delivery. Implemented non-blocking I/O to handle multiple clients concurrently.',
    image: '/images/http-server.png',
    tags: [
      'C++',
      'HTTP',
      'TCP/IP',
      'Non-Blocking I/O',
      'CGI',
      'Network Programming'
    ],
    github: 'https://github.com/Shivamsharma-builds/HTTP_Server',
    demo: '#',
    featured: false
  },

  {
    title: 'Personal Portfolio Website',
    description:
      'A responsive personal portfolio website designed to showcase projects, technical skills, and software engineering experience with a modern custom UI optimized for different screen sizes.',
    image: '/images/portfolio.png',
    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Responsive Design'
    ],
    github: 'https://github.com/Shivamsharma-builds/portfolio',
    demo: 'https://shivamsharmadiatm.netlify.app',
    featured: false
  }
];

  return (
    <section id="projects" className="py-20 px-6 section-fade gsap-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents my passion for building meaningful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, rotateX: 1.5, rotateY: index % 2 === 0 ? -1.5 : 1.5, scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className={`glass rounded-2xl overflow-hidden card-hover group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent"></div>
                
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-xs font-semibold text-white">
                    ⭐ Featured
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:-rotate-6"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition-all duration-300 hover:scale-110 hover:rotate-6"
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-200 transition-all duration-300 hover:bg-purple-500/20 hover:-translate-y-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Shivamsharma-builds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/10 transition-all"
          >
            <FiGithub /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects