/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    }, 
    colors: {
      'primary': '#3FC1C9',
      'secondary': '#C6E0FA',
      'accent': '#12E27A',
      'bblack': '#22282F',
      'back': '#F5F5F5',
      'grey': '#D9D9D9',
      'lightp': '#52E4ED',
    },
    fontSize: {
      'small': ['16px', {
        lineHeight: '17px',
        letterSpacing: '0',
        fontWeight: '300',
      }],
      'hero': ['128px', {
        lineHeight: '120px',
        letterSpacing: '0',
        fontWeight: '900',
      }],
      'para': ['32px', {
        lineHeight: '35px',
        letterSpacing: '0',
        fontWeight: '300',
      }],
      'h1': ['64px', {
        lineHeight: '70px',
        letterSpacing: '0',
        fontWeight: '700',
      }],
      'h2': ['48px', {
        lineHeight: '52px',
        letterSpacing: '0',
        fontWeight: '600',
      }],
      'h3': ['36px', {
        lineHeight: '39px',
        letterSpacing: '0',
        fontWeight: '500',
      }],
      'button': ['24px', {
        lineHeight: '29px',
        letterSpacing: '0',
        fontWeight: '400',
      }],
    },
  },
  plugins: [],
}
