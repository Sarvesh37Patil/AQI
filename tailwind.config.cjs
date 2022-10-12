/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        good: "linear-gradient(to right, #56ab2f, #a8e063)",
        fair: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
        moderate: "linear-gradient(to left, #F8EF42 0%, #FCE043 100%)",
        poor: "linear-gradient(to left, #f46b45, #eea849)",
        bad: "linear-gradient(to right, #cb2d3e, #ef473a)",
      },
    },
  },
  plugins: [],
};
