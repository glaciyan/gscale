import AscensionCostTable from "../data/AscensionCostTable";
import { IBaseCharacter } from "../data/contracts/IBaseCharacter";
import { ICharacter } from "../data/contracts/ICharacter";
import { ITraveler } from "../data/contracts/ITraveler";
import { IItemWithAmountNotNull, ItemWithAmount } from "../data/entities/ItemWithAmount";
import { getAscensionStage } from "../getAscensionStage";
import { AscensionLevel } from "../interfaces/AscensionLevel";
import mergeAmountByName from "./mergeAmountByName";

export function calculateAscension(
  character: IBaseCharacter,
  start: AscensionLevel,
  goal: AscensionLevel
): IItemWithAmountNotNull[] {
  const startAscension = getAscensionStage(start);
  const goalAscension = getAscensionStage(goal);

  // this is like rust's match as expression https://doc.rust-lang.org/rust-by-example/flow_control/match.html
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

  //@ts-ignore becase of the reduce the array is not goign to include any null items
  return AscensionCostTable(items).slice(startAscension, goalAscension).reduce(mergeAmountByName, []);
}
