module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      glow: '0 0 5px #D9ED92'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'yale-blue': '#184E77',
      'lapis-lazuli': '#1E6091',
      'celadon-blue': '#1A759F',
      'blue-munsell': '#168AAD',
      'viridian-green': '#34A0A4',
      'keppel': '#52B69A',
      'ocean-green': '#76C893',
      'granny-smith-apple': '#99D98C',
      'yellow-green-crayola': '#B5E48C',
      'key-lime': '#D9ED92',
      // // theme('colors.orange')
      // orange: {
      //   // theme('colors.orange.DEFAULT')
      //   DEFAULT: '#FFD085',
      //   // theme('colors.orange.light')
      //   light: '#FEECCF',
      //   dark: '#FF9E10',
      // },
      gray: {
        DEFAULT: '#6B7280',
      },
      black: {
        DEFAULT: '#000000'
      },
      white: {
        DEFAULT: '#FFFFFF',
      }
    },
    fontFamily: {
      sans: ['Verdana', 'Helvetica', 'sans-serif'],
      serif: [],
    },
    extend: {},
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {},
  },
  plugins: [],
}
