/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'primary': '#65ffa2',
        'secondary': '#8fdaff',
        'background' : '#fff'
      },
      fontFamily: {
        neotriad: ['Neotriad Regular', 'serif'],
        kodeMono : ["Kode Mono", 'monospace'],
        figtree : ["Figtree", 'sans-serif'],
        pressStart: ['"Press Start 2P"', 'system-ui'],
      }
    },
    screens: {
      xs:"480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      lg2: "1400px",
      xl: "1600px",
      xl2: "1820px",
    },
  },

  plugins: [],
}
