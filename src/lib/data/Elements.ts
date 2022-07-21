import { IElement } from "./contracts/IElement";
import ElementsKey from "./keys/ElementsKey";

export const Elements: { [key in ElementsKey]: IElement } = {
  pyro: {
    name: "Pyro",
    normalizedName: "pyro",
  },
  geo: {
    name: "Geo",
    normalizedName: "geo",
  },
  hydro: {
    name: "Hydro",
    normalizedName: "hydro",
  },
  anemo: {
    name: "Anemo",
    normalizedName: "anemo",
  },
  cryo: {
    name: "Cryo",
    normalizedName: "cryo",
  },
  electro: {
    name: "Electro",
    normalizedName: "electro",
  },
  dendro: {
    name: "Dendro",
    normalizedName: "dendro",
  },
  neutral: {
    name: "Neutral",
    normalizedName: "neutral",
  },
};
