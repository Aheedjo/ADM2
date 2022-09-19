/** @type {import('tailwindcss').Config} */

module.exports = {
    extend: {
        'hero-pattern': "url('../src/assets/repeating-triangles.svg')",
    },
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
    colors: {
        primary: '#2B2B2B',
        secondary: '#F9F9F9'
    },
    },
    plugins: [],
}
