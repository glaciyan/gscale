import { IElement } from "./IElement";
import { IItem } from "./IItem";
import { IItemGroup } from "./IItemGroup";
import { INamed } from "./INamed";
import { IWeaponType } from "./IWeaponType";

export interface ICharacter extends INamed {
    element: IElement;
    weaponType: IWeaponType;
    rarity: 4 | 5;
    sub: string;
    constellation: string;
    description: string;
    local: IItem;
    commonGroup: IItemGroup;
    boss: IItem;
    gemGroup: IItemGroup;
    bookGroup: IItemGroup;
    weekly: IItem;
}
