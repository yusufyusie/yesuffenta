const forms = require('@tailwindcss/forms');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        night: '#0f172a',
        teal: {
          light: '#64ffda',
          DEFAULT: '#2c7a7b',
          dark: '#234e52',
        },
        gray: {
          light: '#a0aec0',
          DEFAULT: '#718096',
          dark: '#2d3748',
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [forms],
};
