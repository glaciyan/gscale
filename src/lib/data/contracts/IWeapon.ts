import { IItemGroup } from "./IItemGroup";
import { INamed } from "./INamed";
import { IWeaponType } from "./IWeaponType";

export interface IWeapon extends INamed {
  rarity: number;
  weaponType: IWeaponType;
  sub: string;

  weaponAscensionGroup: IItemGroup;
  weaponCommon: IItemGroup;
  generalCommon: IItemGroup;
}
