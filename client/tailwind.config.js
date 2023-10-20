/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '400px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      bg: {
          main: '#2C3A3B',
          sec: '#476A6F',
          layer: '#364546',
          'layer-hover': '#425657'
      },
      green: {
        main: '#7EB09B',
        light: '#B0E2D5',
        dark: '#64907E',
        transp: '#AADBCE'
      },
      others: {
        red: '#7EB09B',
        yellow: '#B0E2D5',
        blue: '#64907E',
        green: '#64907E',
      },
      grays: {
        disabled: '#414F50',
        'other-drugs': '#485058',
        component: '#CCCCCC',
      },
      white: {
        100: "#F4F4F5",
        200: "#E2E4E8",
        300: "#A1A1AA",
      }
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

