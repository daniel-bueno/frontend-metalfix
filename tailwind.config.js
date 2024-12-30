// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        "intro-rust": ['"Intro Rust"', "sans-serif"],
      },
      colors: {
        metalfix: {
          blue: "#001939",
          "blue-active": "#002451",
          "blue-hover": "#001326",
          red: "#BE1F25",
          "red-active": "#930A0F",
          "red-hover": "#9F1A1F",
          gray: "#C8C6C3",
          "gray-active": "#A1A09F",
          "gray-hover": "#B1B0AF",
        },
        landing: {
          gray: "#828180",
        },
      },
      borderWidth: {
        2.5: "2.5px",
      },
      outlineWidth: {
        2.5: "2.5px",
      },
      screens: {
        xs: "475px",
        "2xs": "375px",
        "8xl": "1500px",
      },
      keyframes: {
        scale: {
          "0%, 50%": {
            transform: "scale(1)",
          },
          "25%": {
            transform: "scale(1.03)",
            color: "#001939",
          },
        },
        "fade-in": {
          "100%": {
            opacity: "100%",
          },
          " 0%": {
            opacity: "0%",
          },
        },
      },
      animation: {
        "fade-in": " fade-in 1s ease-in-out ",
        scale: " scale 3s 3s ease-in-out infinite",
      },
      transitionProperty: {
        "border-radius": "border-radius",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
