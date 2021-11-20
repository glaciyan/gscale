import { INamed } from "./INamed";

export interface IItem extends INamed {
  rarity: number;
  groupId?: string;
  category: string;
}
