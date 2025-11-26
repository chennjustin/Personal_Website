'use client'

import { useTheme } from '@/hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <button className="theme-toggle" aria-label="切換主題">
        <i className="fas fa-moon"></i>
      </button>
    )
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="切換主題"
    >
      <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
    </button>
  )
}

