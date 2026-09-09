import { useEffect } from 'react'

function ServicesModal({ service, closing, onClose }) {
  useEffect(() => {
    if (!service) return
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    document.body.style.paddingRight = scrollbarWidth > 0 ? `${scrollbarWidth}px` : ''
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [service])

  if (!service) return null

  return (
    <div className={`service-modal-overlay ${closing ? 'closing' : ''}`} onClick={onClose}>
      <div
        className="service-modal"
        style={{ '--accent': service.color }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close Modal"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="service-modal-header">
          <span className="service-icon">
            <i className={service.icon}></i>
          </span>
          <div className="service-modal-heading">
            <span className="service-modal-eyebrow">Let's work together</span>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        </div>

        <div className="service-modal-section">
          <span className="service-section-label">
            <i className="fas fa-list-check" aria-hidden="true"></i>
            What's included
          </span>
          <ul className="service-modal-included-list">
            {service.included.map((item, i) => (
              <li key={i}>
                <i className="fas fa-check" aria-hidden="true"></i>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="service-modal-section">
          <span className="service-section-label">
            <i className="fas fa-layer-group" aria-hidden="true"></i>
            Stacks used:
          </span>
          <div className="service-modal-tech">
            {service.tech.map((tag, i) => (
              <span key={i} className="service-tech-tag">{tag}</span>
            ))}
          </div>
        </div>

        <form className="service-modal-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="b8372ac7-5731-4de6-b195-22d8cbbbb5ea" />
          <input type="hidden" name="subject" value={`Service Inquiry: ${service.title}`} />
          <div className="form-group">
            <label htmlFor="service-name">Your Name</label>
            <input type="text" id="service-name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="service-email">Your Email</label>
            <input type="email" id="service-email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="service-message">Message</label>
            <textarea id="service-message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-btn service-submit-btn">
            Send Inquiry
            <i className="fas fa-paper-plane" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ServicesModal