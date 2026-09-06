/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#161513",
        surface: "#1E1D1A",
        "surface-bright": "#282622",
        primary: "#EDECE8",
        muted: "#8A887F",
        "muted-hover": "#A6A49C",
        subtext: "#B8B6AE",
        border: "#2A2925",
        "border-light": "#3A3833",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
        card: "18px",
      },
    },
  },
  plugins: [],
};
