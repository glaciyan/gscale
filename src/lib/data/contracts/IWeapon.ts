import { INamed } from "./INamed";
import { IWeaponType } from "./IWeaponType";

export interface IWeapon extends INamed {
  rarity: number;
  weaponType: IWeaponType;
  sub: string;
}
