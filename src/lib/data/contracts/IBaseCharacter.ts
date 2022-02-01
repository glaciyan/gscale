import { IElement } from "./IElement";
import { INamed } from "./INamed";
import { IWeaponType } from "./IWeaponType";

export interface IBaseCharacter extends INamed {
  element: IElement;
  weaponType: IWeaponType;
  rarity: 4 | 5;
  sub: string;
  constellation: string;
  description: string;
  isTraveler?: boolean;
  altName?: string;
  noPic?: boolean;
  speculated?: boolean;
}
