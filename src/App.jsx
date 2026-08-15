import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [loading, setLoading] = useState(true)
  const [resumeOpen, setResumeOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const openResume = () => setResumeOpen(true)
    window.addEventListener('open-resume', openResume)
    return () => window.removeEventListener('open-resume', openResume)
  }, [])

  useEffect(() => {
    if (loading) return undefined

    // Lenis provides smooth, momentum-based scrolling.
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    })

    const onLenisScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onLenisScroll)

    const raf = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // GSAP drives section reveals and keeps them synchronized with Lenis.
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.gsap-section').forEach((section) => {
        gsap.fromTo(
          section,
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 88%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })

      ;['.experience-card', '.education-card'].forEach((selector) => {
        gsap.utils.toArray(selector).forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, x: index % 2 === 0 ? -70 : 70, rotateY: index % 2 === 0 ? -5 : 5 },
            {
              opacity: 1,
              x: 0,
              rotateY: 0,
              duration: 0.9,
              delay: index * 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 86%',
                toggleActions: 'play none none reverse',
              },
            },
          )
        })
      })

      gsap.fromTo(
        '.gsap-navbar',
        { y: -24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      )
    })

    ScrollTrigger.refresh()

    return () => {
      ctx.revert()
      lenis.off('scroll', onLenisScroll)
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [loading])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0a0f]">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl gradient-text font-bold">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#0a0a0f] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  )
}

export default App
