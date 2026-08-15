/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],

  theme: {
    extend: {
      colors: {
        ink: '#0B0B0C',
        panel: '#121214',
        panel2: '#19191C',
        line: '#29292D',

        bone: '#F3F1EC',
        mute: '#96969B',

        signal: '#E4372B',
        signal2: '#FF5A46',
      },

      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },

      letterSpacing: {
        tightest: '-0.04em',
      },

      boxShadow: {
        glass: '0 20px 70px rgba(0, 0, 0, 0.28)',
        soft: '0 10px 40px rgba(0, 0, 0, 0.18)',
      },
    },
  },

  plugins: [],
}