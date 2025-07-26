/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        'intel-mono': ['"Intel One Mono"', 'monospace'],
      },
    },
  },
  plugins: [
    
  ],
}

