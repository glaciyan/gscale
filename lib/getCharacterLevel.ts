import { Level, characterLevels } from "../data/characterLevels";

export function toLevel(level: number): Level {
    let highest: [string, Level] = ["1", { level: 1, ascended: false }];

    Object.entries(characterLevels).forEach((lvl) => {
        if (level >= lvl[1].level + (lvl[1].ascended ? 1 : 0)) {
            highest = lvl;
        }
    });

    return highest[1];
}
