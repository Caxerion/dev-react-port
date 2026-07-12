function Footer({ name, email, linkedin, github }) {
  return (
    <footer className="footer">
      <div className="container">
        <p>Copyright © {new Date().getFullYear()} {name}. All rights reserved.</p>
        <div className="footer-links">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`mailto:${email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer