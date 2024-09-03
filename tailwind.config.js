/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        '200': '50rem', // Agregando una nueva clase de height
        '120': '30rem',
        '140': '35rem'
      },
      maxHeight: {
        '120': '30rem',
      },
    },
  },
  plugins: [],
}

