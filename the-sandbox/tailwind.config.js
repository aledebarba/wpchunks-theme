module.exports = {
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
  theme: {
    fontFamily: {
        display: [ "August", "Palatino Linotype", "Palatino", "Palladio", "URW Palladio L", "Book Antiqua", "Baskerville", "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", "Garamond", "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", "Georgia", "serif"],
        serif: [ "Newsreader", "Cambria", "Hoefler Text", "Utopia", "Liberation Serif", "Nimbus Roman No9 L Regular", "Times", "Times New Roman", "serif" ],
        sans: [ "Montserrat", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif" ]
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {        
        DEFAULT: '#2d2d2d',
        dark: '#000000',
        light: '#3d3d3d',
      },
      white: {
        DEFAULT: '#f1efe8;',
        dark: '#d8d8d8',
        light: '#ffffff',
      },
      red: {
        DEFAULT: '#f32d2d',
        dark: '#861919',
        light: '#d35e5e',
      },
      pink: {
        DEFAULT: '#f44878',
        dark: '#903b53',
        light: '#c9788f',
      }
    },
  },
  content: [
    "./src/_app.js",
    "./src/components/**/*.js",
    "./src/components/**/*.jsx",
    "./src/pages/**/*.js",
    "./src/pages/**/*.jsx",
]
}