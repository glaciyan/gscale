import { Item } from "./Item";

export class ItemWithAmount {
  constructor(item: Item, amount: number) {
    this.item = item;
    this.amount = amount;
  }

  item: Item;
  amount: number;
}
