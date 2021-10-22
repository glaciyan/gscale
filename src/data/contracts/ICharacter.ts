import { UsingId } from "./UsingId";

export interface ICharacter extends UsingId {
    name: string;
    weaponType: string;
    element: string;
    rarity: 4 | 5;
}
