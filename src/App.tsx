import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Education from './components/Education'
import HowIWork from './components/HowIWork'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorGlow from './components/common/CursorGlow'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-900">
      <div className="noise-overlay" />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Achievements />
        <Education />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
