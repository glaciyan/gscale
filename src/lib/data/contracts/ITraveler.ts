import { IBaseCharacter } from "./IBaseCharacter";
import { IItem } from "./IItem";
import { IItemGroup } from "./IItemGroup";
import { TravelerTalentBooks } from "../../types/TravelerTalentBooks";

export interface ITraveler extends IBaseCharacter {
  local: IItem;
  gemGroup: IItemGroup;
  ascensionCommonGroup: IItemGroup;

  talentCommonGroup: IItemGroup;
  talentBoss: IItem;

  talentBooks: TravelerTalentBooks;

  normalTalentBooks: TravelerTalentBooks;
  normalTalentCommonGroup: IItemGroup;
  normalTalentBoss: IItem;
}
