import { INamed } from "./INamed";
import { ItemGroup } from "./ItemGroup";

export class Item implements INamed {
  constructor(name: string, normalizedName: string, rarity: number, group?: ItemGroup) {
    this.name = name;
    this.normalizedName = normalizedName;
    this.rarity = rarity;
    this.group = group;
  }

  name: string;
  normalizedName: string;
  rarity: number;
  group?: ItemGroup;
}
