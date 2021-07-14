import { characterLevels, Level, LevelUpCostIndexed } from "../data/characterLevels";
import { CharacterProgressions, PricedMaterials, Progression } from "./MyTypes";

export function toId(name: string) {
    return name.trim().replace(/'/g, "").replace(/[ -]/g, "_").toLowerCase();
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

export function levelSlice(
    array: LevelUpCostIndexed[],
    prog: Progression
): LevelUpCostIndexed[] {
    return array.filter(
        ({ level }) => (level ?? 1) > prog.start && (level ?? 20) <= prog.goal
    );
}

export function talentSlice(
    array: PricedMaterials[],
    prog: Progression
): PricedMaterials[] {
    return array.slice(prog.start - 1, prog.goal - 1);
}

export function sanitizeProgression(progressions: CharacterProgressions) {
    if (progressions.level.start < 1) progressions.level.start = 1;
    if (progressions.level.goal > 90) progressions.level.goal = 90;

    if (progressions.normal.start < 1) progressions.normal.start = 1;
    if (progressions.normal.goal > 10) progressions.normal.goal = 10;

    if (progressions.elemental.start < 1) progressions.elemental.start = 1;
    if (progressions.elemental.goal > 10) progressions.elemental.goal = 10;

    if (progressions.burst.start < 1) progressions.burst.start = 1;
    if (progressions.burst.goal > 10) progressions.burst.goal = 10;
}
