import { characterLevels } from "./characterLevels";
import { AscensionLevel } from "../interfaces/AscensionLevel";

export function fromLegacyLevel(level: number): AscensionLevel {
  let highest: [string, AscensionLevel] = ["1", { level: 1, ascended: false }];

  Object.entries(characterLevels).forEach((lvl) => {
    if (level >= lvl[1].level + (lvl[1].ascended ? 1 : 0)) {
      highest = lvl;
    }
  });

  return highest[1];
}
