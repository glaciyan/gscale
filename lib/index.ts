import { Levels } from "../data/characterLevels";
import { costs as XpMoreCosts } from "../data/characterLevels";

export function toId(name: string) {
    return name.replace(/'/g, "").replace(/[ -]/g, "_").toLowerCase();
}

export function additionOrCreate(
    array: any[],
    order: number,
    id: any,
    amount: number | null
) {
    if (amount === null) return;
    const sameIdEntry = array.find((entry) => entry.id === id);

    if (sameIdEntry !== undefined) {
        sameIdEntry.amount += amount;
    } else {
        array.push({ id: id, order: order, amount: amount });
    }
}

export function totalXpAndMora(level: Levels) {
    return XpMoreCosts.reduce(
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

export function getAscensionLevel(level: Levels) {
    if (level <= 20) return -1;
    else if (level >= 21 && level <= 40) return 0;
    else if (level >= 41 && level <= 50) return 1;
    else if (level >= 51 && level <= 60) return 2;
    else if (level >= 61 && level <= 70) return 3;
    else if (level >= 71 && level <= 80) return 4;
    else if (level >= 81) return 5;
    else return -1;
}
