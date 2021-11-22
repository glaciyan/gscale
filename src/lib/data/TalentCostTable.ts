import { crown, grouped, mora, single } from "../itemFunc";
import { IItem } from "./contracts/IItem";
import { IItemGroup } from "./contracts/IItemGroup";
import { ItemWithAmount } from "./entities/ItemWithAmount";

export default (
  items: { commonGroup?: IItemGroup; bookGroup?: IItemGroup; weekly?: IItem },
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
): ItemWithAmount[] => {
  const common = grouped(items.commonGroup);
  const book = grouped(items.bookGroup);
  const weekly = single(items.weekly);

  // using switch here because traveler has different books for each level
  switch (level) {
    case 1: // 1 -> 2
      return [mora(12500), common(6, 1), book(3, 2)];
    case 2: // 2 -> 3
      return [mora(17500), common(3, 2), book(2, 3)];
    case 3: // 3 -> 4
      return [mora(25000), common(4, 2), book(4, 3)];
    case 4: // 4 -> 5
      return [mora(30000), common(6, 2), book(6, 3)];
    case 5: // 5 -> 6
      return [mora(37500), common(9, 2), book(9, 3)];
    case 6: // 6 -> 7
      return [mora(120000), common(4, 3), book(4, 4), weekly(1)];
    case 7: // 7 -> 8
      return [mora(260000), common(6, 3), book(6, 4), weekly(1)];
    case 8: // 8 -> 9
      return [mora(450000), common(9, 3), book(12, 4), weekly(2)];
    case 9: // 9 -> 10
      return [mora(700000), common(12, 3), book(16, 4), weekly(2), crown(1)];
  }
};
