import { ItemGroup } from "./ItemGroup";
import { Item } from "./Item";

export interface CharacterItems {
  gem: ItemGroup;
  local: Item;
  boss: Item;
  common: ItemGroup;
  book: ItemGroup;
  weekly: Item;
}
