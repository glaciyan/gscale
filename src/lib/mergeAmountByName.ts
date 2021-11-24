import { ItemWithAmount } from "./data/entities/ItemWithAmount";
import { Items } from "./data/Items";

/**
 * Intended to be used as an argument for Array.prototype.reduce where the array is of type ItemWithAmount[][]
 * Will merge all ItemWithAmount by the items normalizedName property and add together its amount property.
 * This function will also filter out any undefined or null items, items which have an amount of 0 or "none" items.
 */
const merge = (total: ItemWithAmount[], current: ItemWithAmount[]) => {
  current.forEach((item) => {
    if (item) {
      if (item.amount > 0 && item.item !== Items.none) {
        const itemWithSameNameIndex = total.findIndex((i) => i?.item.normalizedName === item.item.normalizedName);

        if (itemWithSameNameIndex === -1) {
          total.push(Object.assign({}, item));
        } else {
          //@ts-ignore will not be undefined
          total[itemWithSameNameIndex].amount += item.amount;
        }
      }
    } else {
      console.error(`An item is falsy. Item won't show up.`);
    }
  });

  return total;
};

export default function (table: ItemWithAmount[][]): ItemWithAmount[] {
  // the reduce function will filter out any null items
  return table.reduce(merge, []) as ItemWithAmount[];
}
