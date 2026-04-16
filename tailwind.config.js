/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0a0a0a',
        bone: '#fafafa',
        fog: '#e5e5e5'
      }
    }
  },
  plugins: []
};
