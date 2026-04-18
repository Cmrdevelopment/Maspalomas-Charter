/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#f4f9fd',
          100: '#e8f1fb',
          200: '#cadff5',
          300: '#9ac1eb',
          400: '#629cdd',
          500: '#3a7dcb',
          600: '#2e63ab',
          700: '#274f8a',
          800: '#24446f',
          900: '#203a5d',
          950: '#08101d',
        },
        sand: {
          50: '#fffdf7',
          100: '#fdf8ec',
          200: '#f6ead1',
          300: '#edd6aa',
          400: '#e3bd7d',
          500: '#d8a863',
          600: '#c88a44',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 25px 70px rgba(8, 16, 29, 0.35)',
        card: '0 18px 60px rgba(8, 16, 29, 0.12)',
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(180deg, rgba(8,16,29,0.08) 0%, rgba(8,16,29,0.72) 55%, rgba(8,16,29,0.94) 100%)',
        'soft-radial': 'radial-gradient(circle at top, rgba(98,156,221,0.18), transparent 42%)',
      },
    },
  },
  plugins: [],
}
