import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        'text-color': 'var(--text-color)',
        'text-light': 'var(--text-light)',
        'bg-color': 'var(--bg-color)',
        'bg-light': 'var(--bg-light)',
        'border-color': 'var(--border-color)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': 'var(--shadow)',
        'custom-hover': 'var(--shadow-hover)',
      },
      borderRadius: {
        'custom': 'var(--radius)',
        'custom-lg': 'var(--radius-lg)',
      },
    },
  },
  plugins: [],
}
export default config

