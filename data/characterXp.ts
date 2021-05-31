// data from https://genshin-impact.fandom.com/wiki/Character_EXP

import { Levels } from "./characterLevels";

const stages = [
    { level: 20, xp: 120175, mora: 24200 },
    { level: 40, xp: 578325, mora: 115800 },
    { level: 50, xp: 579100, mora: 116000 },
    { level: 60, xp: 854125, mora: 171000 },
    { level: 70, xp: 1195925, mora: 239200 },
    { level: 80, xp: 1611875, mora: 322400 },
    { level: 90, xp: 3423125, mora: 684800 },
];

export default stages;

export function totalXpAndMora(level: Levels) {
    return stages.reduce(
        (accumulator, stage) => {
            if (level >= stage.level) {
                return {
                    level: stage.level,
                    xp: accumulator.xp + stage.xp,
                    mora: accumulator.mora + stage.mora,
                };
            } else return accumulator;
        },
        { level: 1, xp: 0, mora: 0 }
    );
}
