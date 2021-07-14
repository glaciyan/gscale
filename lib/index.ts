import { characterLevels, Level, LevelUpCost } from "../data/characterLevels";
import { PricedMaterials, Progression } from "./MyTypes";

export function toId(name: string) {
    return name.trim().replace(/'/g, "").replace(/[ -]/g, "_").toLowerCase();
}

// combines objects inside of an array based of a given field(distinction) and sums up the specified numberField
export function sumObjectArray(array: any[], distinction: string, numberField: string) {
    const out: any[] = [];
    array.forEach((arrayItem) => {
        const match = out.find((value) => value[distinction] === arrayItem[distinction]);

        if (match) {
            match[numberField] += arrayItem[numberField];
        } else {
            out.push(arrayItem);
        }
    });

    return out;
}

export function getAscensionLevel(level: number): number {
    if (level >= 21 && level <= 40) return 1;
    else if (level >= 41 && level <= 50) return 2;
    else if (level >= 51 && level <= 60) return 3;
    else if (level >= 61 && level <= 70) return 4;
    else if (level >= 71 && level <= 80) return 5;
    else if (level >= 81) return 6;
    else return 0;
}

export function toLevel(level: number): Level {
    let highest: [string, Level] = ["1", { level: 1, ascended: false }];

    Object.entries(characterLevels).forEach((lvl) => {
        if (level >= lvl[1].level + (lvl[1].ascended ? 1 : 0)) {
            highest = lvl;
        }
    });

    return highest[1];
}

export function ascStageSlice(
    array: PricedMaterials[],
    prog: Progression
): PricedMaterials[] {
    const start = getAscensionLevel(prog.start);
    const end = getAscensionLevel(prog.goal);

    return array.slice(start, end);
}

export function levelSlice(array: LevelUpCost[], prog: Progression): LevelUpCost[] {
    return array.filter(({ level }) => level > prog.start && level <= prog.goal);
}

export function talentSlice(
    array: PricedMaterials[],
    prog: Progression
): PricedMaterials[] {
    return array.slice(prog.start - 1, prog.goal - 1);
}
