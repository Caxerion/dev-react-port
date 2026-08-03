function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <button
      className={`theme-switch ${isDark ? 'dark' : 'light'}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="theme-switch-track">
        <div className="theme-switch-stars">
          <span className="star star-1"></span>
          <span className="star star-2"></span>
          <span className="star star-3"></span>
        </div>
        <div className="theme-switch-thumb">
          {isDark ? (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
              <path
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </g>
            </svg>
          )}
        </div>
      </div>
    </button>
  )
}

export default ThemeToggle