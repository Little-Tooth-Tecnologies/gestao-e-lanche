/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
        colors: {
          'fundos-escuro': '#3C4C3B',        
          'fundos-claro': '#A0C49D',
          'botão-idle': '#C4D7B2',
          'botão-hover': '#D6FCB2',
          'botão-dash': '#5A9F54',
          'texto-dark': '#1E1E1E',
          'texto-white': '#FDFDFD',
      },
        fontFamily: {
          'title': ["Raleway", 'sans-serif'],
          'body': ["Roboto-flex", 'sans-serif'],
          'paragraph': ["Roboto", 'sans-serif']
        },
      },
  },
  plugins: [
    
  ],
}