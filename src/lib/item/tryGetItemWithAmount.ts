import { IItem } from "../data/contracts/IItem";
import { ItemWithAmount } from "../types/ItemWithAmount";
import { Items } from "../data/Items";

export function tryGetItemWithAmount(item?: IItem, amount?: number): ItemWithAmount {
  if (item && amount) {
    return { item, amount };
  } else {
    return { item: item ?? Items.unknown, amount: amount ?? 0 };
  }
}
