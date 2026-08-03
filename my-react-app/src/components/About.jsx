function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-card">
            <div className="about-text">
              <p>Hey there! I'm Kenneth Geveny Ayhuwan and you can call me Kenneth, a passionate and curious programmer with a strong interest in technology. I'm always eager to learn new things and take advantage of every opportunity to grow my skills.</p>
              <p>My journey in programming began with Roblox in 2020 when I was just 12 years old, creating interactive UIs and GUIs for my games by watching some tutorials. A few years later, I discovered website development and became eager to explore this field further.</p>
              <p>Besides becoming a developer I have a solid interest in cyber security, This diverse background has given me a unique perspective on both frontend and backend development.</p>
              <p></p>
            </div>
            <div className="about-info">
              <div className="info-item">
                <a href="#contact" className="info-resume-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-download"></i> My Resume
                </a>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Client Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number"><i className="fa-solid fa-hammer"></i></span>
              <span className="stat-label">Currently still learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About