import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { isLight, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      aria-pressed={isLight}
      title={isLight ? 'Dark mode' : 'Light mode'}
    >
      {isLight ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 4.5a.75.75 0 0 1 .75.75v1.1a.75.75 0 0 1-1.5 0v-1.1A.75.75 0 0 1 12 4.5Zm0 12.15a.75.75 0 0 1 .75.75v1.1a.75.75 0 0 1-1.5 0v-1.1a.75.75 0 0 1 .75-.75ZM4.5 12a.75.75 0 0 1 .75-.75h1.1a.75.75 0 0 1 0 1.5h-1.1A.75.75 0 0 1 4.5 12Zm13.15 0a.75.75 0 0 1 .75-.75h1.1a.75.75 0 0 1 0 1.5h-1.1a.75.75 0 0 1-.75-.75ZM6.72 6.72a.75.75 0 0 1 1.06 0l.78.78a.75.75 0 0 1-1.06 1.06l-.78-.78a.75.75 0 0 1 0-1.06Zm8.66 8.66a.75.75 0 0 1 1.06 0l.78.78a.75.75 0 1 1-1.06 1.06l-.78-.78a.75.75 0 0 1 0-1.06ZM17.28 6.72a.75.75 0 0 1 0 1.06l-.78.78a.75.75 0 1 1-1.06-1.06l.78-.78a.75.75 0 0 1 1.06 0ZM8.56 15.38a.75.75 0 0 1 0 1.06l-.78.78a.75.75 0 0 1-1.06-1.06l.78-.78a.75.75 0 0 1 1.06 0ZM12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Z"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M15.1 3.6a.7.7 0 0 1 .82.96 6.6 6.6 0 1 0 3.7 7.2.7.7 0 0 1 1.37.28A8 8 0 1 1 13.8 3.35a.7.7 0 0 1 1.3.25Z"
          />
        </svg>
      )}
    </button>
  )
}
