/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app.vue'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(20px)' },
        },
        moveBeam: {
          '0%, 100%': {
            transform: 'translateY(0) scaleY(1)',
          },
          '50%': {
            transform: 'translateY(-50vh) scaleY(1.2)',
          },
        },
        shift: {
          '50%': {
            transform: 'translate(0) scale(1)',
          },
        },
      },
      animation: {
        float: 'float 10s infinite ease-in-out',
        moveBeam: 'moveBeam 1s infinite ease-in-out',
        shift: 'shift 1s infinite ease-in-out',
      },
      colors: {
        light: {
          background: '#E0E0E0',
          backgroundSecondary: '#F0F0F0',
          textPrimary: '#333333',
          textSecondary: '#555555',
          primary: '#007AFF',
          secondary: '#34C759',
          accent: '#FF9500',
          border: '#A5A5AA',
        },
        dark: {
          background: '#161b25',
          backgroundSecondary: '#1a202c',
          textPrimary: '#E5E5EA',
          textSecondary: '#A5A5AA',
          primary: '#0A84FF',
          secondary: '#30D158',
          accent: '#FF9F0A',
          border: '#222a39',
        },
      },
    },
  },
  plugins: [],
}
