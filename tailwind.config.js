/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        'h1, h2, h3, h4': {
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          fontWeight: theme('fontWeight.semibold'),
        },
      });
    },
  ],
};
