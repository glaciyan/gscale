import { IItem } from "../contracts/IItem";

interface IItemWithAmount {
  item: IItem;
  amount: number;
}

export type ItemWithAmount = IItemWithAmount | null;
