import { IItem } from "./IItem";
import { INamed } from "./INamed";

export interface IItemGroup {
  normalizedName: string;
  itemIds: IItem[];
}
