function Contact({ email }) { 
  return (
    <section id="contact" className="section">
      <div className="container-contact">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Keep in touch with me, contact me if it's neccessary!</p>

        <div className="contact-wrapper">
          <div className="contact-container">
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
              <input type="hidden" name="access_key" value="b8372ac7-5731-4de6-b195-22d8cbbbb5ea" />
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit Response</button>
            </form>
            <div id="formMessage" className="form-message"></div>
          </div>

          <div className="contact-info">
            <div className="info-item">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h3>Phone</h3>
                <p>+62 882 9473-0740</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">
                <i className="fa-regular fa-envelope" style={{ fontSize: '25px' }}></i>
              </div>
              <div>
                <h3>Email</h3>
                <a href={`mailto:${email}`} className="gmail">{email}</a>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3>Location</h3>
                <p>Tangerang City, Indonesia</p>
              </div>
            </div>

            <div className="social-links">
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
        </div>
      </div>
    </section>
  )
}

export default Contact