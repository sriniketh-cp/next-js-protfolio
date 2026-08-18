 {import('tailwindcss').Config}
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#060b14',
        secondary: '#0d1526',
        accent: {
          blue: '#4f8ef7',
          purple: '#9b59f5',
          cyan: '#00d4ff',
          green: '#1bffc8',
          orange: '#ff8c42',
          pink: '#f75fa0',
        },
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #4f8ef7 0%, #9b59f5 100%)',
        'gradient-hero': 'linear-gradient(135deg, #4f8ef7 0%, #9b59f5 50%, #f75fa0 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}