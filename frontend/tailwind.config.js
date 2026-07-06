/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF9',
        surface: '#F0EFEB',
        ink: '#14151A',
        'ink-muted': '#5B5D66',
        accent: '#2F5D50',
        'accent-soft': '#DCE8E3',
        line: '#E1DFD7',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
