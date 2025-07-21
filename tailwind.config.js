/** @type {import('tailwindcss').Config} */

export default {
    content : ['./pages/**/*.{js, jsx}', './components/**/*.{js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                amatic : ['var(--font-amatic)', 'cursive'],
            },
        },
    },
    plugins : [],
}