import { IItem } from "../contracts/IItem";

export interface IItemWithAmountNotNull {
  item: IItem;
  amount: number;
}

export type ItemWithAmount = IItemWithAmountNotNull | null;
