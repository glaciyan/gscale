import { IdIndex } from "./contracts/UsingId";
import { IElement } from "./contracts/IElement";

export const Elements: IdIndex<IElement> = {
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
};

export default Elements;
