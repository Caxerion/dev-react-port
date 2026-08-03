import heroImg from '../assets/lol.png'

function Hero({ firstName, lastName, aboutFirstLine, scrollToSection }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-greeting">Hello There, I'm</span>
          <h1 className="hero-name">
            {firstName} <span>{lastName}</span>
          </h1>
          <h2 className="hero-title">
            I'm a <span className="typed-text"></span>
          </h2>
          <p className="hero-about">{aboutFirstLine}</p>
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary" onClick={() => scrollToSection('about')}>
              Know more
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Contact Me
            </a>
          </div>
          <div className="socials">
            <div className="icon">
              <a href="https://www.instagram.com/liyamm__/" target="_blank" rel="noopener">
                <i className="fa-brands fa-instagram" style={{ fontSize: '20px' }}></i>
              </a>
            </div>
            <div className="icon">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener">
                <i className="fa-brands fa-linkedin" style={{ fontSize: '20px' }}></i>
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/Caxerion" target="_blank" rel="noopener">
                <i className="fa-brands fa-github" style={{ fontSize: '20px' }}></i>
              </a>
            </div>
            <div className="icon">
              <a href="https://www.reddit.com/user/Acrobatic-Tell-5500/" target="_blank" rel="noopener">
                <i className="fa-brands fa-reddit" style={{ fontSize: '20px' }}></i>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-frame">
            <img src={heroImg} alt="Kenneth" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero