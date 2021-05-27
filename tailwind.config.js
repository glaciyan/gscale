module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "twSafeList.txt",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                gscale: {
                    dark: {
                        background: {
                            ternary: "#18191B",
                            secondary: "#1E1E20",
                            primary: "#2F3033",
                        },
                        text: {
                            ternary: "#8A8C8F",
                            secondary: "#C9CBCF",
                            primary: "#F4F4F4",
                        },
                    },
                },

                genshin: {
                    element: {
                        anemo: "#80FFD7",
                        pyro: "#FF9999",
                        electro: "#FFACFF",
                        geo: "#FFE667",
                        cryo: "#99FFFF",
                        hydro: "#80C0FF",
                    },

                    rarity: {
                        1: "#757575",
                        2: "#6FD1A2",
                        3: "#5AA6E0",
                        4: "#B07DE6",
                        5: "#F08E3A",
                    },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
