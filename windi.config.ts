import { defineConfig } from "windicss/helpers";
import aspectRatio from "windicss/plugin/aspect-ratio";
import lineClamp from "windicss/plugin/line-clamp";
import { range } from "./src/lib/range";

const em = ["anemo", "pyro", "electro", "geo", "cryo", "hydro"];

export default defineConfig({
  plugins: [aspectRatio, lineClamp],
  safelist: [
    range(5).map((n) => `text-genshin-rarity-${n}`),
    em.map((e) => `text-genshin-element-${e}`),
    em.map((e) => `ring-genshin-element-${e}`),
    em.map((e) => `bg-genshin-element-${e}-dark`),
    em.map((e) => `bg-genshin-element-${e}`),
    em.map((e) => `border-genshin-element-${e}`),
  ],
  attributify: {
    prefix: "w",
  },
  theme: {
    extend: {
      colors: {
        dark: {
          "50": "#aaacb0",
          "100": "#87898f",
          "200": "#404040",
          "300": "#373739",
          "400": "#2f3033",
          "500": "#292A2C",
          "600": "#252527",
          "700": "#1d1e20",
          "800": "#18191b",
          "900": "#09090a",
        },
        light: {
          important: "#F4F4F4",
          normal: "#C9CBCF",
          ternary: "#8A8C8F",
        },
        genshin: {
          element: {
            anemo: "#80FFD7",
            pyro: "#FF9999",
            electro: "#FFACFF",
            geo: "#FFE667",
            cryo: "#99FFFF",
            hydro: "#80C0FF",

            // Semantic colors (without having to majorly change up the api of Button.vue)
            neutral: "#F4F4F4",

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
