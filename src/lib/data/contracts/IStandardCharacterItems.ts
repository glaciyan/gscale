import { IItem } from "./IItem";
import { IItemGroup } from "./IItemGroup";

export type IStandardCharacterItems = IStandardAscensionItems & IStandardTalentItems;

export interface IStandardAscensionItems {
  gemGroup: IItemGroup;
  local: IItem;
  commonGroup: IItemGroup;
  boss: IItem;
}
export interface IStandardTalentItems {
  commonGroup: IItemGroup;
  bookGroup: IItemGroup;
  weekly: IItem;
}
