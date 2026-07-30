function ThemeToggle({ theme, toggleTheme }) {
  const isLight = theme === 'light'

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <i className={`fas ${isLight ? 'fa-moon' : 'fa-sun'}`}></i>
    </button>
  )
}

export default ThemeToggle