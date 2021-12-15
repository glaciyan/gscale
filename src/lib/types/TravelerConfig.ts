import { IElement } from "../data/contracts/IElement";
import { IItem } from "../data/contracts/IItem";
import { IItemGroup } from "../data/contracts/IItemGroup";
import { ITravelerTalentBooks } from "../data/contracts/ITravelerTalentBooks";

export interface TravelerConfig {
  element: IElement;

  talentCommonGroup: IItemGroup;
  talentBoss: IItem;

  talentBooks: ITravelerTalentBooks;
  normalTalentBooks: ITravelerTalentBooks;
  normalTalentCommonGroup: IItemGroup;
  normalTalentBoss: IItem;
}
