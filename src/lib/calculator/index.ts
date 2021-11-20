import AscensionCostTable from "../data/AscensionCostTable";
import { IBaseCharacter } from "../data/contracts/IBaseCharacter";
import { ICharacter } from "../data/contracts/ICharacter";
import { ITraveler } from "../data/contracts/ITraveler";
import { IItemWithAmountNotNull } from "../data/entities/ItemWithAmount";
import { Items } from "../data/Items";
import LevelingCostTable from "../data/LevelingCostTable";
import { getAscensionStage } from "../getAscensionStage";
import getLevelingIndex from "../getLevelingIndex";
import { AscensionLevel } from "../interfaces/AscensionLevel";
import mergeAmountByName from "../mergeAmountByName";

export function calculateLeveling(
  start: AscensionLevel,
  goal: AscensionLevel
): { mora: IItemWithAmountNotNull; lazy: IItemWithAmountNotNull; accurate: IItemWithAmountNotNull[] } {
  const startLevelIndex = getLevelingIndex(start);
  const goatLevelIndex = getLevelingIndex(goal);

  const cost = LevelingCostTable.slice(startLevelIndex, goatLevelIndex).reduce(
    (prev, current) => {
      prev.xp += current.xp;
      prev.mora += current.mora;
      prev.accurate[0] += current.accurate[0];
      prev.accurate[1] += current.accurate[1];
      prev.accurate[2] += current.accurate[2];

      return prev;
    },
    { xp: 0, mora: 0, accurate: [0, 0, 0] }
  );

  return {
    mora: { item: Items.mora, amount: cost.mora },
    lazy: { item: Items.heros_wit, amount: Math.ceil(cost.xp / 20000) },
    accurate: [
      { item: Items.heros_wit, amount: cost.accurate[0] },
      { item: Items.adventurers_experience, amount: cost.accurate[1] },
      { item: Items.wanderers_advice, amount: cost.accurate[2] },
    ],
  };
}

export function calculateAscension(
  character: IBaseCharacter,
  start: AscensionLevel,
  goal: AscensionLevel
): IItemWithAmountNotNull[] {
  const startAscension = getAscensionStage(start);
  const goalAscension = getAscensionStage(goal);

  // this works like rusts match as expression https://doc.rust-lang.org/rust-by-example/flow_control/match.html
  const items = (() => {
    switch (character.meta) {
      case undefined:
        return character as ICharacter;
      case "traveler":
        const traveler = character as ITraveler;
        return {
          gemGroup: traveler.gemGroup,
          local: traveler.local,
          commonGroup: traveler.ascensionCommonGroup,
          boss: undefined,
        };
    }
  })();

  //@ts-ignore becase of the reduce the array is not going to include any null items
  return AscensionCostTable(items).slice(startAscension, goalAscension).reduce(mergeAmountByName, []);
}
