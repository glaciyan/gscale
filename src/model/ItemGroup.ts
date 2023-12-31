import { INamed } from "./INamed";
import { Item } from "./Item";

export interface ItemGroup extends INamed {
  items: Item[];
}
