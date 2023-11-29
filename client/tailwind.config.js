/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        bg: {
          main: "#2C3A3B",
          sec: "#476A6F",
          layer: "#364546",
          dark: "#222D2E",
          "layer-hover": "#425657",
        },
        green: {
          main: "#7EB09B",
          light: "#B0E2D5",
          dark: "#64907E",
          transp: "#AADBCE",
        },
        others: {
          red: "#7EB09B",
          yellow: "#B0E2D5",
          blue: "#2C5CA6",
          green: "#2E875C",
        },
        grays: {
          disabled: "#414F50",
          "other-drugs": "#485058",
          component: "#CCCCCC",
        },
        neutral: {
          main: "#A1A1AA",
          sec: "#F4F4F5",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
      divideColor: {
        "custom-divide": "rgba(170, 219, 206, 0.40)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("tailwind-scrollbar"),
  ],
};
