import { toId } from "../lib/toId";
import { ICharacter } from "./contracts/ICharacter";

export class GICharacter implements ICharacter {
    name: string;
    weaponType: string;
    element: string;
    rarity: 4 | 5;
    id: string;

    constructor(name: string, weaponType: string, element: string, rarity: 4 | 5) {
        this.id = toId(name);
        this.name = name;
        this.weaponType = weaponType;
        this.element = element;
        this.rarity = rarity;
    }
}

export const characters: GICharacter[] = [
    new GICharacter("Amber", "bow", "pyro", 4),
    new GICharacter("Albedo", "sword", "geo", 5),
];

export default characters;
