module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'primary-color': {
          200:'#e7b25d',
          300:'#d89934' 
        },
        'secondary-color': '#1f2131', 
      },
      backgroundColor: {
        'theme-color': '#eee5de',
      },
      height: {
        navbar: '80px',
      }, 
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-30%)', 'opacity':'0'},
          '100%': { transform: 'translateY(0%)', 'opacity': '1'},
        }, 
        fadeIn: {
          from: {opacity:'0', bottom:'0'},
          to: {opacity:'1', bottom:'16px'},
        }
      },
      animation: {
        slideDown: 'slideDown .5s ease-in-out',
        fadeIn: 'fadeIn .3s ease-in-out',
      }
    },
  },
  plugins: [],
}
