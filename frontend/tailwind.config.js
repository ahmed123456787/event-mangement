// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#5C4DBF",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  tailwind: {
    config: "tailwind.config.js" | "tailwind.config.ts",
  },
};
