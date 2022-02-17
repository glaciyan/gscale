import ItemGroupsKey from "../keys/ItemGroupsKey";
import { INamed } from "./INamed";

export interface IItem extends INamed {
  rarity: number;
  groupId?: ItemGroupsKey;
  category: typeof Categories[-1];
}

export const Categories = [
  "boss",
  "common",
  "none",
  "weaponCommon",
  "weaponAscension",
  "local",
  "weekly",
  "book",
  "special_talent",
  "weapon_leveling",
  "character_leveling",
  "gem",
  "currency",
] as const;
