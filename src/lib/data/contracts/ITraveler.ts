import { IBaseCharacter } from "./IBaseCharacter";
import { IItem } from "./IItem";
import { IItemGroup } from "./IItemGroup";
import { ITravelerTalentBooks } from "./ITravelerTalentBooks";

export interface ITraveler extends IBaseCharacter {
  local: IItem;
  gemGroup: IItemGroup;
  ascensionCommonGroup: IItemGroup;

  talentCommonGroup: IItemGroup;
  talentBoss: IItem;

  talentBooks: ITravelerTalentBooks;
  normalTalentBooks: ITravelerTalentBooks;
}
