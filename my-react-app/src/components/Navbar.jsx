function Navbar({ isScrolled, scrollToSection }) {
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo" onClick={() => scrollToSection('home')}>
          KENN
        </a>
        <div className="nav-right">
          <ul className="nav-links">
            <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar