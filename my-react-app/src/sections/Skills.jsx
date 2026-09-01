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

// Setiap kategori dipetakan ke "nama file" biar kerasa nuansa code editor-nya
const CATEGORY_META = {
  frontend: { file: 'frontend.jsx', dot: '#6366f1' },
  backend: { file: 'backend.js', dot: '#f59e0b' },
  database: { file: 'database.sql', dot: '#3b82f6' },
  gamedev: { file: 'gamedev.lua', dot: '#1740d4' },
  design: { file: 'design.fig', dot: '#ec4899' },
  tools: { file: 'tools.sh', dot: '#10b981' },
  other: { file: 'other.md', dot: '#14b8a6' },
}

function Skills({
  skills,
  showSkills,
  setShowSkills,
  activeCategory,
  setActiveCategory,
  viewMode,
  setViewMode,
}) {
  const categories = Object.keys(skills)

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills Highlights</h2>

        <div className={`code-window ${showSkills ? 'open' : ''}`}>
          {/* Title bar ala jendela editor kode */}
          <div className="code-titlebar" onClick={() => setShowSkills(!showSkills)}>
            <div className="titlebar-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <span className="titlebar-path">
              <i className="fas fa-brain"></i> ~/skills
            </span>
            <i className={`fas fa-chevron-down collapse-icon ${showSkills ? 'rotate' : ''}`}></i>
          </div>

          {showSkills && (
            <div className="code-body">
              {/* Baris tab file per kategori */}
              <div className="file-tabs-row">
                <div className="file-tabs">
                  {categories.map((category) => {
                    const meta = CATEGORY_META[category] || { file: `${category}.txt`, dot: '#94a3b8' }
                    return (
                      <button
                        key={category}
                        className={`file-tab ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                        style={{ '--tab-dot': meta.dot }}
                      >
                        <span className="tab-dot"></span>
                        {meta.file}
                      </button>
                    )
                  })}
                </div>

                <button
                  className="view-toggle-btn"
                  onClick={() => setViewMode(viewMode === 'list' ? 'chart' : 'list')}
                >
                  <i className={viewMode === 'chart' ? 'fas fa-list' : 'fas fa-chart-pie'}></i>
                  {viewMode === 'list' ? 'view --chart' : 'view --list'}
                </button>
              </div>

              <div className="skills-container">
                {categories.map((category) => {
                  const categorySkills = skills[category]
                  return (
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
                        <div className="skills-lines">
                          {categorySkills.map((skill, index) => (
                            <div key={index} className="skill-line" data-percentage={skill.percentage}>
                              <span className="line-number">{String(index + 1).padStart(2, '0')}</span>
                              <span className="skill-name">
                                {skill.icon && <i className={skill.icon}></i>}
                                {skill.name}
                              </span>
                              <div className="skill-progress-container">
                                <div className="skill-progress-bar" style={{ width: `${skill.percentage}%` }}></div>
                                <div className="skill-percentage-tooltip">{skill.percentage}%</div>
                              </div>
                              <span className="line-comment">// {skill.percentage}%</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills