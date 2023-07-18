/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#4aa671",

                    secondary: "#47aa1d",

                    accent: "#eff1e4",

                    neutral: "#2e2933",

                    "base-100": "#ffff",

                    info: "#83bad3",

                    success: "#28a987",

                    warning: "#b17b06",

                    error: "#e43a3f",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
