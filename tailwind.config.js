// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      extend: {
        colors: {
          green: {
            DEFAULT: "#7aa845",
            100: "#b1e079",
            200: "#a3d16c",
            300: "#95c35f",
            400: "#87b652",
            500: "#7aa845",
            600: "#6d9b38",
            700: "#608d2b",
            800: "#53801e",
            900: "#46740e",
          },
          agronomiq: {
            DEFAULT: "#7aa845",
            hover: "#5c7e36", // FIX: hover sempre verde
            active: "#8bc04f", // FIX: active sempre verde
            green: "#7aa845",
            "green-active": "#8bc04f",
            gray: "#423f40",
            "gray-active": "#585456",
          },
          landing: {
            green: "#1F7853",
          },
          primary: {
            DEFAULT: "#ABC45C",
            100: "#DDE7BE",
            200: "#CDDC9D",
            300: "#BCD07D",
            400: "#899D4A",
            500: "#677637",
            600: "#444E25",
          },
          secondary: {
            DEFAULT: "#D81C1C",
            100: "#EFA4A4",
            200: "#E87777",
            300: "#E04949",
            400: "#AD1616",
            500: "#821111",
            600: "#560B0B",
          },
          "new-gray": {
            DEFAULT: "#C1C1C1",
            100: "#F5F5F5",
            200: "#EAEAEA",
            300: "#E0E0E0",
            400: "#D6D6D6",
            500: "#C1C1C1",
            600: "#ADADAD",
            700: "#989898",
          },
          black: {
            DEFAULT: "#222222",
            100: "#7A7A7A",
            200: "#5D5D5D",
            300: "#3F3F3F",
            400: "#303030",
            500: "#222222",
            600: "#131313",
            700: "#040404",
          },
          danger: {
            DEFAULT: "#D81C1C",
            100: "#EFA4A4",
            200: "#E87777",
            300: "#E04949",
            400: "#AD1616",
            500: "#821111",
            600: "#560B0B",
          },
        },
        backgroundImage: {
          login: "url('/img/login-bg.jpg')",
          "landing-what-we-do": "url('/img/what_we_do_bg.png')",
        },
        borderRadius: {
          DEFAULT: "0.5rem",
          md: "0.75rem",
          lg: "1rem",
        },
        borderWidth: {
          2.5: "2.5px",
        },
        outlineWidth: {
          2.5: "2.5px",
        },
        screens: {
          "2xs": "375px",
          xs: "475px",
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
  },
  plugins: [],
}
