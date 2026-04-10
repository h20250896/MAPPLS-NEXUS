import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif']
      },
      colors: {
        mappls: {
          red: '#E8292B',
          navy: '#003087',
          electric: '#00C9FF',
          success: '#00D97E',
          warning: '#F6C343',
          dark: '#0A0F1E',
          surface: '#111827'
        }
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(0,201,255,0.18), transparent 30%), linear-gradient(180deg, #03204D 0%, #020913 48%, #070B20 100%)'
      }
    }
  },
  plugins: []
}

export default config
