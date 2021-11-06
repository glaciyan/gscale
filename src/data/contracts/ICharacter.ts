import { IBaseCharacter } from "./IBaseCharacter";
import { IItem } from "./IItem";
import { IItemGroup } from "./IItemGroup";

export interface ICharacter extends IBaseCharacter {
    local?: IItem;
    commonGroup?: IItemGroup;
    boss?: IItem;
    gemGroup?: IItemGroup;
    bookGroup?: IItemGroup;
    weekly?: IItem;
}
