// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0f172a', // dark navy
        nightblue: '#1e293b', // slightly lighter navy
        accent: '#38bdf8', // cyan accent
        accentyellow: '#fbbf24' // gold accent
      }
    }
  },
  plugins: [],
}
