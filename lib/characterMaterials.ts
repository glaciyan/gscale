import { getAscensionLevel, sumObjectArray, xp } from ".";
import { ascensionCosts as fullAscensionCostOf } from "../data/ascensionCost";
import { Character } from "../data/characters";
import { costsTo } from "../data/characterLevels";
import _ from "lodash";
import { items } from "../data/items";
import itemOrder from "./itemOrder";

export function getCharacterMaterials(character: Character, start: number, goal: number) {
    if (start < 1 || start > 81) return null;
    if (goal < 20 || goal > 90) return null;
    if (start > goal) return null;
    const startAsc = getAscensionLevel(start);
    const goalAsc = getAscensionLevel(goal);

    // leveling
    const levelingCost = getLevelingCost(start, goal);

    const accurateLevelMaterials = {
        heros_wit: xp(4, levelingCost.accurate[0]),
        adventurers_experience: xp(3, levelingCost.accurate[1]),
        wanderers_advice: xp(2, levelingCost.accurate[2]),
    };

    const lazyLevelMaterial = xp(4, Math.ceil(levelingCost.xp / items.heros_wit.xp));
    lazyLevelMaterial.order = itemOrder.xpLazy;

    // ascension
    const requiredAcensions = fullAscensionCostOf(character).slice(startAsc, goalAsc);

    const ascensionCost = requiredAcensions.reduce((prev, current) => {
        return {
            mora: prev.mora + current.mora,
            items: [...prev.items, ...current.items],
        };
    });

    ascensionCost.items = sumObjectArray(ascensionCost.items, "order", "amount");

    // talents

    // combining everything
    const mora: number[] = [];
    mora.push(levelingCost.mora);
    mora.push(ascensionCost.mora);

    return {
        xp: levelingCost.xp,
        xpLazy: lazyLevelMaterial,
        xpAccurate: accurateLevelMaterials,
        mora: mora.reduce((prev, current) => prev + current),
        ascension: ascensionCost.items,
        normal: null,
        elemental: null,
        burst: null,
    };
}

function getLevelingCost(start: number, goal: number) {
    return costsTo
        .filter(({ level }) => level > start && level <= goal)
        .reduce(
            (prev, curr) => {
                return {
                    mora: prev.mora + curr.mora,
                    xp: prev.xp + curr.xp,
                    accurate: prev.accurate.map((c, i) => c + curr.accurate[i]),
                };
            },
            { mora: 0, xp: 0, accurate: [0, 0, 0] }
        );
}
// export function getTalentMaterials(
//     character: Character,
//     start: number,
//     goal: number
// ) {
//     if (start < 1 || start > 9) return null;
//     if (goal < 2 || goal > 10) return null;
//     if (start > goal) return null;
// }
