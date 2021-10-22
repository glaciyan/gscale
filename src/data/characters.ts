import { toId } from "../lib/toId";
import { UsingId } from "./contracts/id";
import { GIElement } from "./elements";
import weaponTypes, { GIWeaponType } from "./weaponTypes";

export interface IGICharacter extends UsingId {
    name: string;
    weaponType: string;
    element: string;
    rarity: 4 | 5;
}

export class GICharacter implements IGICharacter {
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

const characters: GICharacter[] = [
    new GICharacter("Amber", "bow", "pyro", 4),
    new GICharacter("Albedo", "sword", "geo", 5),
];

export default characters;
