/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#061B3A',
          'navy-dark': '#030E1F',
          'navy-light': '#0B2956',
          blue: '#0866D9',
          'blue-bright': '#078BFA',
          cyan: '#16C7F4',
          'cyan-dark': '#0ea5e9',
          bg: '#F2F8FF',
          'bg-light': '#F8FBFF',
          body: '#34445B',
          border: '#DCE8F5',
          gold: '#D97706',
          yellow: '#F59E0B',
          'yellow-light': '#FEF3C7',
          'yellow-warm': '#EAB308',
          'yellow-dark': '#B45309',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(6, 27, 58, 0.04)',
        'card': '0 4px 20px rgba(6, 27, 58, 0.06)',
        'card-hover': '0 12px 32px rgba(8, 102, 217, 0.12)',
        'dropdown': '0 10px 30px rgba(6, 27, 58, 0.1)',
      }
    },
  },
  plugins: [],
}
