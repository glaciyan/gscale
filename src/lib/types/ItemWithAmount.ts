import { IItem } from "../data/contracts/IItem";

export interface ItemWithAmount {
  item: IItem;
  amount: number;
}
