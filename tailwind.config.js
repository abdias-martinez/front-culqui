
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'blue': '#1DA1F2',
        'darkblue': '#2795D9',
        'lightblue': '#EFF9FF',
        'dark': '#657786',
        'light': '#AAB8C2',
        'lighter': '#E1E8ED',
        'lightest': '#F5F8FA',

        'purple': '#763383',
        'green': '#00a19b',
        'orange': '#EB6F25',
        'purple-100': '#BE7BCC',
        'primary-300': '#763383',
        'primary-400': '#4F2258',
        'primary-500': '#35173B',
        'secondary-100': '#FDE7D9',
        'secondary-200': '#F3A87C',
        'secondary-300': '#EB6F25',
        'secondary-400': '#CD5713',
        'secondary-500': '#95400E',
      }
    },
  },
};