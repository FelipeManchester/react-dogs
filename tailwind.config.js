/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { DEFAULT: '72rem' },
    },
    extend: {
      colors: {
        brand: '#fb1',
        'brand-dark': '#764701',
      },
      fontFamily: {
        primary: ['Helvetica', 'Arial', 'sans-serif'],
        secondary: ['Spectral', 'Georgia'],
      },
      boxShadow: {
        focus: '0 0 0 3px #fea, 0 0 0 4px #fb1',
      },
      backgroundImage: {
        usuario: "url('./assets/usuario.svg')",
        login: "url('./assets/login.jpg')",
        visualizacao: "url('./assets/visualizacao.svg')",
        'visualizacao-black': "url('./assets/visualizacao-black.svg')",
      },
      keyframes: {
        'anime-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleUp: {
          to: { opacity: '1', transform: 'scale(1)' },
        },
        scaleDown: {
          from: { opacity: '1', transform: 'scale(1)' },
          to: { opacity: '0', transform: 'scale(0.8)' },
        },
        latir: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        skeleton: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'anime-left': 'anime-left 0.3s ease-out forwards',
        scaleUp: 'scaleUp 0.3s forwards',
        scaleDown: 'scaleDown 0.3s forwards',
        latir: 'latir 0.6s infinite',
        skeleton: 'skeleton 1.5s infinite linear',
      },
    },
  },
  plugins: [],
};
