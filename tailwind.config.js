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
    },
  },
  plugins: [],
}
