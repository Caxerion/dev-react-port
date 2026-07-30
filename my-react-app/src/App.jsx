import { useState, useEffect } from 'react'
import Typed from 'typed.js'
import { portfolioData } from './data/portfolioData'
import useMusicPlayer from './hooks/useMusicPlayer'
import useTheme from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SpotifyModal from './components/SpotifyModal'
import MusicPlayerModal from './components/MusicPlayerModal'
import './App.css'

function App() {
  useEffect(() => {
    const typed = new Typed('.typed-text', {
      strings: ['Junior Programmer', 'Web Developer', 'Designer', 'Beginner Game Developer', 'Humble person :)'],
      typeSpeed: 75,
      backSpeed: 35,
      loop: true,
    })
    return () => {
      typed.destroy()
    }
  }, [])

  const [isScrolled, setIsScrolled] = useState(false)
  const [showSkills, setShowSkills] = useState(false)
  const [activeCategory, setActiveCategory] = useState('frontend')
  const [viewMode, setViewMode] = useState('list')
  const [showSpotifyModal, setShowSpotifyModal] = useState(false)
  const [showMusicPlayerModal, setShowMusicPlayerModal] = useState(false)

  const musicPlayer = useMusicPlayer()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const { name, about, email, linkedin, github, skills, projects } = portfolioData
  const firstName = name.split(' ')[0]
  const lastName = name.split(' ').slice(1).join(' ')

  return (
    <div className="portfolio">
      <Navbar
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <Hero
        firstName={firstName}
        lastName={lastName}
        aboutFirstLine={about.split('\n')[0]}
        scrollToSection={scrollToSection}
      />

      <About />

      <Skills
        skills={skills}
        showSkills={showSkills}
        setShowSkills={setShowSkills}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <Projects projects={projects} />

      <Contact email={email} />

      <Footer name={name} email={email} linkedin={linkedin} github={github} />

      <SpotifyModal show={showSpotifyModal} setShow={setShowSpotifyModal} />

      
      <MusicPlayerModal
        show={showMusicPlayerModal}
        setShow={setShowMusicPlayerModal}
        {...musicPlayer}
      />
    </div>
  )
}

export default App