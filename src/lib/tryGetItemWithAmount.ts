import { IItem } from "./data/contracts/IItem";
import { ItemWithAmount } from "./data/entities/ItemWithAmount";

/**
 * Constructs an ItemWithAmount or null if any parameters are falsy
 */
export function tryGetItemWithAmount(item?: IItem, amount?: number): ItemWithAmount {
  if (item && amount) {
    return { item, amount };
  } else {
    return null;
  }
}
