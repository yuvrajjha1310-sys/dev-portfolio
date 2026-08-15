/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0B',        // primary background
        panel: '#141416',      // card / section background
        panel2: '#1B1B1E',     // raised card background
        line: '#2A2A2E',       // hairline borders
        bone: '#F5F3EF',       // primary text (warm off-white)
        mute: '#9A9A9F',       // secondary text
        signal: '#E4372B',     // accent red
        signal2: '#FF5A46',    // hover / bright accent
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}
