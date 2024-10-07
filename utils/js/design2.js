export const design2JS = `
 theme: {
  extend: {
    keyframes: {
      moveBeam: {
        '0%, 100%': {
          transform: 'translateY(0) scaleY(1)',
        },
        '50%': {
          transform: 'translateY(-50vh) scaleY(1.2)',
        },
      },
    },
    animation: {
      moveBeam: 'moveBeam 1s infinite ease-in-out',
    },
  },
},
`
