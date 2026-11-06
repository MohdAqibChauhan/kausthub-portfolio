/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      's': '650px',
      'md': '1000px',
      'lg': '1280px',
      'xl': '1600px',
    },
    extend: {
      colors: {
        black: '#181616',
        surface: '#201d1d',
        card: '#272424',
        ink: {
          DEFAULT: '#fffddb',
          30: 'rgba(255, 253, 219, 0.3)',
          50: 'rgba(255, 253, 219, 0.5)',
          70: 'rgba(255, 253, 219, 0.7)',
        },
        accent: '#ff3831',
        line: '#46443d',
        dim: '#403f37',
        calm: '#5d5b51',
      },
      fontFamily: {
        serif: ['"TAN MEMORIES"', 'serif'],
        mono: ['"Roboto Mono"', 'monospace'],
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        '10': '10px',
      },
      spacing: {
        '15': '15px',
        '25': '25px',
        '30': '30px',
        '38': '38px',
        '50': '50px',
        '65': '65px',
        '90': '90px',
        '135': '135px',
        '150': '150px',
        '180': '180px',
        '300': '300px',
      }
    },
  },
  plugins: [],
}
