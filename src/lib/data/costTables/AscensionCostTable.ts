import { grouped, mora, single } from "../../item/itemFunc";
import { IStandardAscensionItems } from "../contracts/IStandardCharacterItems";
import { ItemWithAmount } from "../../types/ItemWithAmount";

export default (items: Partial<IStandardAscensionItems>): ItemWithAmount[][] => {
  const gem = grouped(items.gemGroup);
  const local = single(items.local);
  const common = grouped(items.commonGroup);
  const boss = single(items.boss);

  return [
    // 1 20+
    [mora(20000), gem(1, 2), boss(0), local(3), common(3, 1)],
    // 2 40+
    [mora(40000), gem(3, 3), boss(2), local(10), common(15, 1)],
    // 3 50+
    [mora(60000), gem(6, 3), boss(4), local(20), common(12, 2)],
    // 4 60+
    [mora(80000), gem(3, 4), boss(8), local(30), common(18, 2)],
    // 5 70+
    [mora(100000), gem(6, 4), boss(12), local(45), common(12, 3)],
    // 6 80+
    [mora(120000), gem(6, 5), boss(20), local(60), common(24, 3)],
  ];
};
