/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jura: ["Jura", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-dark": "#001F49",
        "primary-dark-2": "#0B284D",
        "primary-light": "#005C93",
        active: "#18C234",
      },
      maxWidth: {
        lg: "1280px",
      },
      width: {
        lg: "1280px",
      },
      dropShadow: {
        text: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        desktop: "1280px",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, "pointer-events": "none" },
        },
        menuIn: {
          "0%": {
            opacity: 0,
            transform: "translateX(-100%)",
            "pointer-events": "none",
          },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        menuOut: {
          "0%": { opacity: 1, transform: "translateX(0px)" },
          "100%": {
            opacity: 0,
            transform: "translateX(-100%)",
            "pointer-events": "none",
          },
        },
        initialLoad: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
