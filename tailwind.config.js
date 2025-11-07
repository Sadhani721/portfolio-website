/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito-sans': ['var(--font-nunito-sans)', 'system-ui', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'mono': ['var(--font-geist-mono)', 'monospace'],
        'sans': ['var(--font-nunito-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}