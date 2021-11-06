import { IElement } from "../data/contracts/IElement";
import { INamed } from "../data/contracts/INamed";
import { IWeaponType } from "../data/contracts/IWeaponType";

export interface ICharacterViewModel extends INamed {
    element: IElement;
    weaponType: IWeaponType;
    rarity: 4 | 5;
}
