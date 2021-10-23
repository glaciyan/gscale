import { defineConfig } from "windicss/helpers";

function range(size: number, startAt = 1) {
    return Array.from(Array(size).keys()).map((i) => i + startAt);
}

const em = ["anemo", "pyro", "electro", "geo", "cryo", "hydro"];

export default defineConfig({
    attributify: {
        prefix: "w",
    },
    safelist: [
        range(5).map((n) => `text-genshin-rarity-${n}`),
        em.map((e) => `text-genshin-element-${e}`),
        em.map((e) => `ring-genshin-element-${e}`),
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    "100": "#d7d9dd",
                    "200": "#aaacb0",
                    "300": "#87898f",
                    "400": "#646569",
                    "500": "#444546",
                    "600": "#2f3033",
                    "700": "#252527",
                    "800": "#18191b",
                    "900": "#09090a",
                },
                genshin: {
                    element: {
                        anemo: "#80FFD7",
                        pyro: "#FF9999",
                        electro: "#FFACFF",
                        geo: "#FFE667",
                        cryo: "#99FFFF",
                        hydro: "#80C0FF",

                        // todo check contrast with white text
                        "anemo-dark": "#2FD09A",
                        "pyro-dark": "#FF5C5C",
                        "electro-dark": "#E368E3",
                        "geo-dark": "#edad54",
                        "cryo-dark": "#57cbcb",
                        "hydro-dark": "#3D9EFF",
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
});
