module.exports = {
  purge: ["./*.shtml", "./meiyee/*.html", "./meiyee/**/*.html", "./*.css", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': 'Montserrat',
      },
      letterSpacing: {
        wide: '0.05em',
        wider: '0.10em',
        widest: '0.20em',
      },
      colors: {
        gray: {
          lightest: '#EDEDED',
          light: '#D9D9D9',
          dark: '#808080',
          darkest: '#222222',
        },
        blue: {
          light: '#E4F7F8',
        },
        pink: {
          light: '#F8E4E5',
        },
        yellow: {
          light: '#FFF6E0',
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['group-hover', 'focus'],
      fill: ['hover', 'focus'],
      stroke: ['hover', 'focus'],
      visibility: ['hover', 'focus'],
      backgroundColor: ['active'],
      borderWidth: ['hover', 'focus'],
    }
  },
}