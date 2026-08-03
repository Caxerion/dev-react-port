import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const COLORS = [
  '#6366f1',
  '#8b5cf6',
  '#ec4899',
  '#f59e0b',
  '#10b981',
  '#3b82f6',
  '#ef4444',
  '#14b8a6',
]

function Skills({
  skills,
  showSkills,
  setShowSkills,
  activeCategory,
  setActiveCategory,
  viewMode,
  setViewMode,
}) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills Highlights</h2>

        <div className={`collapse ${showSkills ? 'open' : ''}`}>
          <div className="collapse-header" onClick={() => setShowSkills(!showSkills)}>
            <i className="fas fa-brain header-icon"></i>
            <h3 className="col-title">Skill Highlights</h3>
            <i className={`fas fa-chevron-down collapse-icon ${showSkills ? 'rotate' : ''}`}></i>
          </div>

          {showSkills && (
            <div className="collapse-content">
              <div className="skills-header-row">
                <div className="skills-category-tabs">
                  <button
                    className={`category-tab ${activeCategory === 'frontend' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('frontend')}
                  >
                    <i className="fas fa-laptop-code"></i> Frontend
                  </button>
                  <button
                    className={`category-tab ${activeCategory === 'backend' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('backend')}
                  >
                    <i className="fas fa-gear"></i> Backend
                  </button>
                  <button
                    className={`category-tab ${activeCategory === 'database' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('database')}
                  >
                    <i className="fas fa-database"></i> Database
                  </button>
                  <button
                    className={`category-tab ${activeCategory === 'gamedev' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('gamedev')}
                  >
                    <i className="fas fa-gamepad"></i> Game Dev
                  </button>
                </div>
                <div className="skills-category-tabs">
                  <button
                    className={`category-tab ${activeCategory === 'design' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('design')}
                  >
                    <i className="fas fa-palette"></i> Design
                  </button>
                  <button
                    className={`category-tab ${activeCategory === 'tools' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('tools')}
                  >
                    <i className="fa-solid fa-tools"></i> Dev Tools
                  </button>
                  <button
                    className={`category-tab ${activeCategory === 'other' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('other')}
                  >
                    <i className="fas fa-ellipsis-h"></i> Other Pro skills
                  </button>
                  <button
                    className={`view-mode-btn ${viewMode === 'chart' ? 'active' : ''}`}
                    onClick={() => setViewMode(viewMode === 'list' ? 'chart' : 'list')}
                  >
                    <i className={viewMode === 'chart' ? 'fas fa-list' : 'fas fa-chart-pie'}></i>
                    {viewMode === 'list' ? 'Switch to Chart' : 'Switch to List'}
                  </button>
                </div>
              </div>

              <div className="skills-container">
                {Object.entries(skills).map(([category, categorySkills]) => (
                  <div
                    key={category}
                    className={`skills-list ${activeCategory === category ? 'active' : ''}`}
                    id={`${category}-skills`}
                  >
                    {viewMode === 'chart' ? (
                      <div className="skills-chart-container">
                        <ResponsiveContainer width="100%" height={300}>
                          <PieChart>
                            <Pie
                              data={categorySkills}
                              cx="50%"
                              cy="55%"
                              innerRadius={60}
                              outerRadius={100}
                              paddingAngle={2}
                              dataKey="percentage"
                              nameKey="name"
                              label={({ name, percentage }) => `${name}: ${percentage}%`}
                              labelLine={true}
                            >
                              {categorySkills.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip
                              contentStyle={{
                                backgroundColor: 'var(--bg-secondary)',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: '8px',
                                color: 'var(--text-primary)',
                              }}
                              formatter={(value) => [`${value}%`, 'Proficiency']}
                            />
                            <Legend
                              wrapperStyle={{ color: 'var(--text-primary)' }}
                              formatter={(value) => <span style={{ color: 'var(--text-primary)' }}>{value}</span>}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                        <div className="chart-legend-grid">
                          {categorySkills.map((skill, index) => (
                            <div key={index} className="chart-legend-item">
                              <div className="legend-color" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                              <span className="legend-name">{skill.name}</span>
                              <span className="legend-percentage">{skill.percentage}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="skills-grid">
                        {categorySkills.map((skill, index) => (
                          <div key={index} className="skill-item" data-percentage={skill.percentage}>
                            <span className="skill-name">
                              {skill.icon && <i className={skill.icon}></i>}
                              {skill.name}
                            </span>
                            <div className="skill-progress-container">
                              <div className="skill-progress-bar" style={{ width: `${skill.percentage}%` }}></div>
                              <div className="skill-percentage-tooltip">{skill.percentage}%</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills