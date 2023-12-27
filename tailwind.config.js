/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins'],
        custom2: ['Abril Fatface'],
        custom3: ['Oswald'],
      },
      colors: {
        'text': '#151419',
        'background': '#FBFBFB',
        'primary': '#163020',
        'secondary': '#F56E0F',
        'accent': '#1B1B1E',
      },
    },
  },
  plugins: [],
};
