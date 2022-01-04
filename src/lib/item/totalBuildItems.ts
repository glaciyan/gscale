import { calculateLeveling, calculateAscension, calculateTalent } from "~/lib/calculator";
import mergeAmountByName from "~/lib/item/mergeAmountByName";
import sortItems from "~/lib/item/sortItems";
import { AscensionLevel } from "~/lib/types/AscensionLevel";
import StartGoalRange from "~/lib/types/StartGoalRange";
import { ICharacter } from "../data/contracts/ICharacter";
import { ITraveler } from "../data/contracts/ITraveler";

export default function (
  character: ICharacter | ITraveler,
  {
    level,
    normal,
    elemental,
    burst,
  }: {
    level: StartGoalRange<AscensionLevel>;
    normal: StartGoalRange<number>;
    elemental: StartGoalRange<number>;
    burst: StartGoalRange<number>;
  }
) {
  const levelingItems = calculateLeveling(level.start, level.goal);
  const items = sortItems(
    mergeAmountByName([
      calculateAscension(character, level.start, level.goal),
      calculateTalent(character, normal.start, normal.goal, true),
      calculateTalent(character, elemental.start, elemental.goal),
      calculateTalent(character, burst.start, burst.goal),
      [levelingItems.mora, levelingItems.lazy],
    ])
  );

  return items;
}
