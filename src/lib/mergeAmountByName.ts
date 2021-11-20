import { ItemWithAmount } from "./data/entities/ItemWithAmount";

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
