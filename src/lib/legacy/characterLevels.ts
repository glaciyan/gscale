import { AscensionLevel } from "../types/AscensionLevel";

export const characterLevels: { [numLever: number]: AscensionLevel } = {
  1: { level: 1, ascended: false },
  20: { level: 20, ascended: false },
  21: { level: 20, ascended: true },
  40: { level: 40, ascended: false },
  41: { level: 40, ascended: true },
  50: { level: 50, ascended: false },
  51: { level: 50, ascended: true },
  60: { level: 60, ascended: false },
  61: { level: 60, ascended: true },
  70: { level: 70, ascended: false },
  71: { level: 70, ascended: true },
  80: { level: 80, ascended: false },
  81: { level: 80, ascended: true },
  90: { level: 90, ascended: false },
};
