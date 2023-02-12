module.exports = {
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
  content: [
    "./src/_app.js",
    "./src/components/**/*.js",
    "./src/components/**/*.jsx",
    "./src/pages/**/*.js",
    "./src/pages/**/*.jsx",
]
}