import { INamed } from "./INamed";
import { ItemGroup } from "./ItemGroup";

export interface Item extends INamed {
  rarity: number;
  group?: ItemGroup;
  category: string;
}
