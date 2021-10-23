import { UsingId } from "./UsingId";

export interface ICharacter extends UsingId {
    name: string;
    element: string;
    weaponType: string;
    rarity: 4 | 5;
    sub: string;
    constellation: string;
    description: string;
    localId: string;
    commonGroupId: string;
    bossId: string;
    gemGroupId: string;
    bookGroupId: string;
    weeklyId: string;
}
