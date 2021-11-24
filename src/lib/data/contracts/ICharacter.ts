import { IBaseCharacter } from "./IBaseCharacter";
import { IItem } from "./IItem";
import { IItemGroup } from "./IItemGroup";

export interface ICharacter extends IBaseCharacter {
  // TODO check if everything can be required
  local?: IItem;
  commonGroup?: IItemGroup;
  boss?: IItem;
  gemGroup?: IItemGroup;
  bookGroup?: IItemGroup;
  weekly?: IItem;
}
