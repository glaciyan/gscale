import { UsingId } from "./contracts/id";

interface GIElement extends UsingId {
    name: string;
}

const elements: GIElement[] = [
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
