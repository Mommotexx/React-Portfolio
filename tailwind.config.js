/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                green: "#5FDD9D",
                dark: "#03191E",
            },
        },
    },
    plugins: [],
};
