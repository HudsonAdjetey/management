module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#fff",
        "secondary-bg": "#191B3B",
        "neutral-color": "#000",
        "neutral-btn-color": "#D30808",
        "sky-200": "#BFE5F6 ",
        black: "#000",
        "teal-100": "#BFF6E5 ",
        "green-200": "#D0F6BF ",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        200: "200px",
        400: "400px",
        760: "760px",
        780: "780px",
        "max-628": "628px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
      shadow: {
        card: "0 -10px 30px rgba(15, 115, 1 / .5) !important",
      },
      colors: {
        primary: "#000",
        secondary: "#191B2B",
        dark: "#191B3B",
        light: "#FFF",
        "warn-color": "#D30808",
      },
    },
  },
  plugins: [
    {
      function({ addUtilities }) {
        const newUtilities = {
          ".overflow-hidden": { overflow: "hidden" },
          ".w-full": { width: "100%" },
          ".font-w-500": {
            fontWeight: "500",
          },
        };
        addUtilities(newUtilities, ["responsive"]);
      },
    },
  ],
};
