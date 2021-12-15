import { IElement } from "./IElement";
import { INamed } from "./INamed";
import { IWeaponType } from "./IWeaponType";

export interface ICharacterViewModel extends INamed {
  element: IElement;
  weaponType: IWeaponType;
  rarity: 4 | 5;
}
