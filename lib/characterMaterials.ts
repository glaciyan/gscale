import { getAscensionLevel, mora, sumObjectArray, xp } from ".";
import ascensionCost from "../data/ascensionCost";
import { Character } from "../data/characters";
import { costsTo } from "../data/characterLevels";
import _ from "lodash";
import { items } from "../data/items";
import itemOrder from "./itemOrder";

export function getCharacterMaterials(
    character: Character,
    start: number,
    goal: number
) {
    if (start < 1 || start > 81) return null;
    if (goal < 20 || goal > 90) return null;
    if (start > goal) return null;
    const startAsc = getAscensionLevel(start);
    const goalAsc = getAscensionLevel(goal);
    console.log({ startAsc, goalAsc, start, goal });

    const leveling = costsTo
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

    const cost = _.flatten(ascensionCost(character).slice(startAsc, goalAsc));

    cost.push(mora(leveling.mora));
    cost.push(xp(4, leveling.accurate[0]));
    cost.push(xp(3, leveling.accurate[1]));
    cost.push(xp(2, leveling.accurate[2]));
    cost.push({
        name: items.heros_wit.name,
        rarity: items.heros_wit.rarity,
        amount: Math.ceil(leveling.xp / items.heros_wit.xp),
        order: itemOrder.xpLazy,
    });

    const summed = sumObjectArray(cost, "order", "amount").sort(
        (a, b) => a.order - b.order
    );

    return summed;
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
