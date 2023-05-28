/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile": "url('../public/images/bg-header-mobile.svg')",
        "desktop": "url('../public/images/bg-header-desktop.svg')",
      },
      fontFamily: {
        font: ["League Spartan"]
      }
    },
  },
};
