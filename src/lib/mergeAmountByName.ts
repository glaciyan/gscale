import { ItemWithAmount } from "./data/entities/ItemWithAmount";

/**
 * Intended to be used as an argument for Array.prototype.reduce where the array is of type ItemWithAmount[][]
 * Will merge all ItemWithAmount by the items normalizedName property and add together its amount property.
 * This function will also filter out any undefined items and items which have an amount of 0.
 */
export default (total: ItemWithAmount[], current: ItemWithAmount[]) => {
  current.forEach((item) => {
    if (item && item.amount > 0) {
      const itemWithSameNameIndex = total.findIndex((i) => i?.item.normalizedName === item.item.normalizedName);

      if (itemWithSameNameIndex === -1) {
        total.push(item);
      } else {
        //@ts-ignore will not be undefined
        total[itemWithSameNameIndex].amount += item.amount;
      }
    }
  });

  return total;
};
