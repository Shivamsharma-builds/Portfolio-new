import { useLenis } from './hooks/useLenis'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Process from './components/Process'
import Writing from './components/Writing'
import Footer from './components/Footer'

export default function App() {
  useLenis()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Projects />
        <Skills />
        <Process />
        <Writing />
        <Footer />
      </main>
    </>
  )
}