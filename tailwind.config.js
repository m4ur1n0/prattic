/** @type {import('tailwindcss').Config} */

export default {
    content : [
        './app/**/*.{ts,tsx,js,jsx}',
        './pages/**/*.{ts,tsx,js,jsx}',
        './components/**/*.{ts,tsx,js,jsx}',
        './src/**/*.{ts,tsx,js,jsx}', 
        './node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                amatic : ['var(--font-amatic)', 'cursive'],
            },
            colors : {
                // app_black : 'var(--app-black)',
                // app_background : 'var(--background)',
                // app_hover : 'var(--hover-color)',

            }
        },
    },
    plugins : [],
}