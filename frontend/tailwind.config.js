/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        mainbg:'#050000',
        secondbg: '#FFFFFF',
      },
      screens: {  
        'sm': {'max': '639px'},
      },
      keyframes: {
        bgcolorchange: {
          '0%':{ backgroundColor: '#050000' },
          '100%': { backgroundColor: '#FFFFFF' },
        }
      },
      animation: {
        bgcolorchange: 'bgcolorchange 1s ease-in-out',
      },
      boxShadow: {
        'mine': '6px 6px 1px 2px rgb(219,0,33)',
      }
    },
  },
  plugins: [],
}

