import { calculateLeveling, calculateAscension, calculateTalent } from "~/calculator";
import mergeAmountByName from "~/util/mergeAmountByName";
import sortItems from "~/util/sortItems";
import { AscensionLevel } from "~/model/AscensionLevel";
import StartGoalRange from "~/model/StartGoalRange";
import { BaseCharacter } from "~/model/BaseCharacter";

export default function (
  character: BaseCharacter,
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
