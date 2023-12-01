/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "#2C3A3B",
          sec: "#476A6F",
          layer: "#364546",
          dark: "#222D2E",
          "layer-hover": "#425657",
        },
        urgencyColor: {
          green: "#2E875C",
          yellow: "#AA8F00",
          red: "#BC5252",
        },
        green: {
          main: "#7EB09B",
          light: "#B0E2D5",
          dark: "#64907E",
          transp: "#AADBCE",
        },
        others: {
          red: "#BC5252",
          yellow: "#D5B300",
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
        medication: {
          generic: "#B1752E",
          reference: "#2C5CA6",
          similar: "#2E875C",
          other: "#707D89",
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
