import { useState } from 'react'
import ServicesModal from '../components/ServicesModal'

const services = [
  {
    icon: 'fas fa-code',
    title: 'Landing Page Development',
    description: 'Build responsive, high-converting landing pages and company profile websites with React and modern CSS.',
    included: [
      'Responsive layouts for all devices',
      'Component library setup',
      'Performance optimization',
      'Cross-browser testing',
    ],
    tech: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind', 'Bootstrap'],
    color: '#6366f1',
  },
  {
    icon: 'fas fa-server',
    title: 'Backend Development',
    description: 'Building scalable server-side solutions and RESTful APIs with Node.js, PHP, Laravel, and Python.',
    included: [
      'RESTful API design',
      'Authentication & authorization',
      'Database integration',
      'Server deployment',
    ],
    tech: ['Node.js', 'PHP', 'Laravel', 'Python'],
    color: '#f59e0b',
  },
  {
    icon: 'fas fa-database',
    title: 'Database Design',
    description: 'Structuring efficient data models and queries with MySQL, MongoDB, Firebase, and SQLite.',
    included: [
      'Schema architecture',
      'Query optimization',
      'Data migration',
      'Backup strategy',
    ],
    tech: ['MySQL', 'MongoDB', 'Firebase', 'MySQL Workbench'],
    color: '#10b981',
  },
  {
    icon: 'fas fa-palette',
    title: 'UI/UX Design',
    description: 'Designing intuitive interfaces and prototypes with Figma and Canva, focused on clean aesthetics.',
    included: [
      'Wireframes & prototypes',
      'User flow mapping',
      'Design system',
      'Usability testing',
    ],
    tech: ['Figma', 'Canva', 'Photoshop'],
    color: '#ec4899',
  },
  {
    icon: 'fas fa-gamepad',
    title: 'Game Development',
    description: 'Creating interactive games and experiences on Roblox Studio with Lua scripting and C++.',
    included: [
      'Gameplay mechanics',
      'Level design',
      'Script implementation',
      'Publishing setup',
    ],
    tech: ['Roblox Studio', 'Lua', 'C++'],
    color: '#3b82f6',
  },
  {
    icon: 'fas fa-plug',
    title: 'API Integration',
    description: 'Connecting systems together with well-documented REST APIs, tested and validated with Postman.',
    included: [
      'Endpoint documentation',
      'Request & response testing',
      'Error handling',
      'Rate limit handling',
    ],
    tech: ['REST APIs', 'Postman', 'ThunderClient'],
    color: '#8b5cf6',
  },
]

function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [closing, setClosing] = useState(false)

  const openModal = (service) => {
    setClosing(false)
    setSelectedService(service)
  }

  const closeModal = () => {
    if (closing) return
    setClosing(true)
    setTimeout(() => {
      setSelectedService(null)
      setClosing(false)
    }, 250)
  }

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Services I Offer</h2>
        <p className="section-subtitle">Services tailored to bring your ideas to life</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ '--accent': service.color }}
            >
              <span className="service-icon">
                <i className={service.icon}></i>
              </span>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <div className="service-included">
                <span className="service-included-label">What's included</span>
                <ul>
                  {service.included.map((item, i) => (
                    <li key={i}>
                      <i className="fas fa-check" aria-hidden="true"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-tech">
                {service.tech.map((t, i) => (
                  <span key={i} className="service-tech-tag">{t}</span>
                ))}
              </div>

              <button className="service-cta" onClick={() => openModal(service)}>
                Let's discuss
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          ))}
        </div>
      </div>

      <ServicesModal
        service={selectedService}
        closing={closing}
        onClose={closeModal}
      />
    </section>
  )
}

export default Services