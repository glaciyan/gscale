import { AlternatingBooks } from "./AlternatingBooks";
import { Item } from "./Item";
import { ItemGroup } from "./ItemGroup";

export interface TravelerTalentItems {
  common: ItemGroup;
  books: AlternatingBooks;
  boss: Item;
}
