module.exports = {
    purge: {
        content: ["./index.html", "./src/**/*.svelte"],
        disabled: process.env.NODE_ENV && process.env.NODE_ENV === "dev",
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            green: "#10B981",
            yellow: "#FFBA43",
            white: "#ffffff",
        },
        fontFamily: {
            satisfy: ["Satisfy", "Poppins", "sans-serif"],
            poppins: [
                "Poppins",
                '"Lucida Sans"',
                '"Lucida Sans Regular"',
                "Lucida Grande",
                '"Lucida Sans Unicode"',
                "Geneva",
                "Verdana",
                "sans-serif",
            ],
            times: ["Times"],
        },
        extend: {
            colors: {
                p: "#4A4A4A",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
