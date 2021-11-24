import { IItem } from "../contracts/IItem";

export interface ItemWithAmount {
  item: IItem;
  amount: number;
}
