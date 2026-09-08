import { useState } from 'react'

const services = [
  {
    icon: 'fas fa-code',
    title: 'Frontend Development',
    description: 'Crafting responsive, pixel-perfect interfaces with React, Svelte, and modern CSS frameworks that users love.',
    tech: ['React', 'Svelte', 'Tailwind', 'Bootstrap'],
    color: '#6366f1',
  },
  {
    icon: 'fas fa-server',
    title: 'Backend Development',
    description: 'Building scalable server-side solutions and RESTful APIs with Node.js, PHP, Laravel, and Python.',
    tech: ['Node.js', 'PHP', 'Laravel', 'Python'],
    color: '#f59e0b',
  },
  {
    icon: 'fas fa-database',
    title: 'Database Design',
    description: 'Structuring efficient data models and queries with MySQL, MongoDB, Firebase, and SQLite.',
    tech: ['MySQL', 'MongoDB', 'Firebase', 'SQLite'],
    color: '#10b981',
  },
  {
    icon: 'fas fa-palette',
    title: 'UI/UX Design',
    description: 'Designing intuitive interfaces and prototypes with Figma and Canva, focused on clean aesthetics.',
    tech: ['Figma', 'Canva', 'Photoshop'],
    color: '#ec4899',
  },
  {
    icon: 'fas fa-gamepad',
    title: 'Game Development',
    description: 'Creating interactive games and experiences on Roblox Studio with Lua scripting and C++.',
    tech: ['Roblox Studio', 'Lua', 'C++'],
    color: '#3b82f6',
  },
  {
    icon: 'fas fa-plug',
    title: 'API Integration',
    description: 'Connecting systems together with well-documented REST APIs, tested and validated with Postman.',
    tech: ['REST APIs', 'Postman', 'ThunderClient'],
    color: '#8b5cf6',
  },
]

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Services I Offer</h2>
        <p className="section-subtitle">Services tailored to bring your ideas to life</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${hoveredIndex === index ? 'active' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ '--card-accent': service.color }}
            >
              <div className="service-icon-wrap">
                <i className={service.icon}></i>
                <div className="service-icon-glow"></div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-tech">
                {service.tech.map((t, i) => (
                  <span key={i} className="service-tech-tag">{t}</span>
                ))}
              </div>
              <div className="service-arrow">
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
