import { IElement } from "../data/contracts/IElement";
import { IItem } from "../data/contracts/IItem";
import { IItemGroup } from "../data/contracts/IItemGroup";
import { TravelerTalentBooks } from "./TravelerTalentBooks";

export interface TravelerConfig {
  element: IElement;

  speculated?: boolean;

  talentCommonGroup: IItemGroup;
  talentBoss: IItem;

  talentBooks: TravelerTalentBooks;
  normalTalentBooks: TravelerTalentBooks;
  normalTalentCommonGroup: IItemGroup;
  normalTalentBoss: IItem;
}
