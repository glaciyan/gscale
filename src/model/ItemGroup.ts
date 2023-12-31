import { INamed } from "./INamed";
import { Item } from "./Item";

export class ItemGroup implements INamed {
  constructor(name: string, normalizedName: string, items: Item[]) {
    this.name = name;
    this.normalizedName = normalizedName;
    this.items = items;
  }

  name: string;
  normalizedName: string;
  items: Item[];
}
