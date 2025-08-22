/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Map Tailwind color tokens to the site's CSS variables (provided by the theme CSS in /public/assets)
        // This ensures utilities like `from-primary`, `to-accent`, `bg-primary`, etc. are generated
        // and will pick up the runtime values from the theme's CSS variables.
        primary: 'var(--color-primary)',
        accent: 'var(--color-secondary)',
      },
    },
  },
  plugins: []
}
