/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                header: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
                opensans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                green: "#5FDD9D",
                dark: "#03191E",
            },
        },
    },
    plugins: [],
};
