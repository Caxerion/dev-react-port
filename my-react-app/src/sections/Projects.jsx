import { useEffect, useRef } from 'react'

function Projects({ projects }) {
  const gridRef = useRef(null)

  const extendedProjects = [...projects]
  const allProjects = [...extendedProjects, ...extendedProjects]
  const loopedProjects = [...allProjects, ...allProjects]

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const singleSetWidth = grid.scrollWidth / 2
    grid.style.setProperty('--scroll-width', `-${singleSetWidth}px`)
  }, [])

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p>Here are some of the projects I've worked on, showcasing my skills in design,
          development, and problem-solving. Each project reflects
          my passion for creating impactful digital experiences.</p>
        <div className="projects-fade-wrapper">
          <div className="projects-grid" ref={gridRef}>
            {loopedProjects.map((project, index) => (
              <div key={index} className="project-card">
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects