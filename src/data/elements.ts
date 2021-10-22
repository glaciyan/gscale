import { IElement } from "./contracts/IElement";
import { getById } from "./util/getById";

const elements: IElement[] = [
    {
        id: "pyro",
        name: "Pyro",
    },
    {
        id: "geo",
        name: "Geo",
    },
];

export default elements;

export function getElement(id: string): IElement | undefined {
    return getById(elements, id);
}
