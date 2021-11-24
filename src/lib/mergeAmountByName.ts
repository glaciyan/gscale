import { IItemWithAmountNotNull, ItemWithAmount } from "./data/entities/ItemWithAmount";

/**
 * Intended to be used as an argument for Array.prototype.reduce where the array is of type ItemWithAmount[][]
 * Will merge all ItemWithAmount by the items normalizedName property and add together its amount property.
 * This function will also filter out any undefined items and items which have an amount of 0.
 */
const merge = (total: ItemWithAmount[], current: ItemWithAmount[]) => {
  current.forEach((item) => {
    if (item) {
      if (item.amount > 0) {
        const itemWithSameNameIndex = total.findIndex((i) => i?.item.normalizedName === item.item.normalizedName);

        if (itemWithSameNameIndex === -1) {
          total.push(Object.assign({}, item));
        } else {
          //@ts-ignore will not be undefined
          total[itemWithSameNameIndex].amount += item.amount;
        }
      }
    } else {
      // undefined is used for cases like the traveler who doesn't have a boss item for ascension
      // null case is when there really was an error getting the item see tryGetItemWithAmount.ts and itemFunc.ts
      if (item === null) {
        console.error(`An item is null. Item won't show up. This might be happening because of a typo.`);
      }
    }
  });

  return total;
};

export default function (table: ItemWithAmount[][]): IItemWithAmountNotNull[] {
  // the reduce function will filter out any null items
  return table.reduce(merge, []) as IItemWithAmountNotNull[];
}
