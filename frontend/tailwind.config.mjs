/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#242424",
        steam: "#171d25",
        epic: "#18181c",
        xbox: "#107c10",
      },
    },
  },
  plugins: [],
};
