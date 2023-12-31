import AscensionCostTable from "./util/tables/AscensionCostTable";
import { Items } from "./data/Items";
import LevelingCostTable from "./util/tables/LevelingCostTable";
import TalentCostTable from "./util/tables/TalentCostTable";
import { AscensionLevel } from "./model/AscensionLevel";
import mergeAmountByName from "./util/mergeAmountByName";
import { range } from "./util/range";
import { ItemWithAmount } from "~/model/ItemWithAmount";

export function calculateLeveling(
  start: AscensionLevel,
  goal: AscensionLevel
): { mora: ItemWithAmount; lazy: ItemWithAmount; accurate: ItemWithAmount[] } {
  const startLevelIndex = getLevelingIndex(start);
  // TODO typo
  const goatLevelIndex = getLevelingIndex(goal);

  // TODO rename this to delta
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
): ItemWithAmount[] {
  // TODO this is weird, get rid of IStandardAscensionItems
  const items: Partial<IStandardAscensionItems> = getStandardAscensionItems(character);

  const startAscension = getAscensionStage(start);
  const goalAscension = getAscensionStage(goal);

  return mergeAmountByName(AscensionCostTable(items).slice(startAscension, goalAscension));
}

// TODO create wrapped for normalTalent argument cause its confusing
export function calculateTalent(
  character: IBaseCharacter,
  start: number,
  goal: number,
  normalTalent = false
): ItemWithAmount[] {
  function calculateSingleTalent(character: IBaseCharacter, level: number, normalTalent = false) {
    const items = getStandardTalentItems(character, level, normalTalent);
    return TalentCostTable(items, level);
  }

  return mergeAmountByName(
    range(goal - start, start).map<ItemWithAmount[]>((level) => {
      return calculateSingleTalent(character, level, normalTalent);
    })
  );
}
