/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './public/index.html'
  ],
  theme: {
    colors: {
      purple: '#763383',
      green: '#00a19b',
      orange: '#EB6F25'
    },
  plugins: [],
  }
}
