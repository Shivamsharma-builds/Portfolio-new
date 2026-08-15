import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiArrowDown } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

import profile1 from '../assets/images/profile1.webp'
const Hero = () => {
  const openResume = (event) => {
    event.preventDefault()
    window.dispatchEvent(new Event('open-resume'))
  }
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-300">Available for Internships</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Shivam Sharma</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-6 font-light">
              Computer Science Student & <span className="text-purple-400">Full Stack Developer</span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mb-8 leading-relaxed">
              Passionate final-year CS student specializing in web development and AI. 
              Eager to build innovative solutions and contribute to impactful projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href="/resume.pdf"
                onClick={openResume}
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
              >
                <FiDownload className="text-xl" /> Download CV
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/10 transition-all hover:scale-105"
              >
                <FiMail className="text-xl" /> Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { Icon: FaGithub, href: 'https://github.com/shivamsharma-builds', color: 'hover:text-gray-300' },
                { Icon: FaLinkedin, href: 'https://linkedin.com/in/shivamsharma-builds', color: 'hover:text-blue-400' },
                { Icon: FaTwitter, href: 'https://x.com/ShivamSharjmt23', color: 'hover:text-cyan-400' },
                { Icon: FaInstagram, href: 'https://www.instagram.com/shivamsharma_jmt', color: 'hover:text-pink-400' },
              ].map(({ Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 glass rounded-full flex items-center justify-center text-xl text-gray-400 ${color} transition-all hover:scale-110`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Glowing ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500/30 animate-float">
                <img
                  src={profile1}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2 animate-bounce-slow">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-2 animate-float">
                <span className="text-2xl">🎓</span>
              </div>
              <div className="absolute top-1/2 -left-8 glass rounded-2xl px-3 py-2 animate-float delay-500">
                <span className="text-2xl">🚀</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown className="text-2xl text-gray-500" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero