/** @type {import('tailwindcss').Config} */

export default {
    content : [
        './app/**/*.{ts,tsx,js,jsx}',
        './pages/**/*.{ts,tsx,js,jsx}',
        './components/**/*.{ts,tsx,js,jsx}',
        './src/**/*.{ts,tsx,js,jsx}', // add if you're using a /src structure
        './node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}', // required for ShadCN UI
    ],
    theme: {
        extend: {
            fontFamily: {
                amatic : ['var(--font-amatic)', 'cursive'],
            },
            colors : {
                app_black : 'var(--app-black)',
                background : 'var(--background)'
            }
        },
    },
    plugins : [],
}