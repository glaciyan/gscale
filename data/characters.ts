import { UsingId } from "./contracts/id";

interface GICharacter extends UsingId {
    name: string;
    weaponType: string;
    element: string;
    rarity: 4 | 5;
}

const characters: GICharacter[] = [
    {
        id: "amber",
        name: "Amber",
        weaponType: "bow",
        element: "pyro",
        rarity: 4,
    },
    {
        id: "albedo",
        name: "Albedo",
        weaponType: "sword",
        element: "geo",
        rarity: 5,
    },
];

export default characters;
