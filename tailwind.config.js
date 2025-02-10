module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Adjust based on your project structure
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A19',
        'primary-lighter': '#252525',
        'primary-dark': '#151515',
        secondary: '#EFD30B',
        'secondary-light': '#FCEC5C',
        'secondary-dark': '#D7B70A',
        text: '#DFDFD9',
        tertiary: '#F9BE08', // Add this new color
      },
      boxShadow: {
        'secondary-glow': '0 0 3px #EFD30B, 0 0 3px #EFD30B, 0 0 3px #EFD30B',
      },
    },
  },
  plugins: [],
};
