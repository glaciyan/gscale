import { sumObjectArray } from ".";
import ascensionCost from "../data/ascensionCost";
import { Character } from "../data/characters";

export function getCharacterMaterials(
    character: Character,
    start: number,
    goal: number
) {
    if (start < 1 || start > 81) return null;
    if (goal < 20 || goal > 90) return null;
    if (start > goal) return null;
    console.log(character);

    const cost = ascensionCost(character);

    return sumObjectArray(cost, "order", "amount");
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
