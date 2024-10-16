/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "white-custom":
          "rgba(255, 255, 255, 0.25) 0px 14px 28px, rgba(255, 255, 255, 0.22) 0px 10px 10px",
      },
    },
  },
  plugins: [],
};
