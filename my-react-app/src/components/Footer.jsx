function Footer({name}) {
  return (
    <footer className="footer">
      <div className="container">
        <p>Copyright © {new Date().getFullYear()} {name}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer