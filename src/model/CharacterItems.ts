import { ItemGroup } from "./ItemGroup";
import { Item } from "./Item";

export interface CharacterAscensionItems {
  gemGroup: ItemGroup;
  local: Item;
  boss: Item;
  commonGroup: ItemGroup;
}

export interface CharacterTalentItems {
  commonGroup: ItemGroup;
  bookGroup: ItemGroup;
  weekly: Item;
}

export type CharacterItems = CharacterAscensionItems & CharacterTalentItems;
