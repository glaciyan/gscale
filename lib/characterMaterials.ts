import { additionOrCreate } from ".";
import { getAscensionLevel } from "./index";
import { Levels } from "../data/characterLevels";
import { characters } from "../data/characters";

export function getCharacterMaterials(character, level: Levels) {
    const characterData = characters[character.characterId];
    if (!characterData) return null;
    const ascension = getAscensionLevel(level);

    const materialList = characterData.ascension as {
        mora: number;
        items: any[];
    }[];

    const totalMaterials: { id: string; amount: number }[] = [];

    for (let i = 0; i <= ascension; i++) {
        const element = materialList[i];

        element.items.forEach(({ item, amount }) => {
            const id = item.id;
            if (amount === null) return;

            additionOrCreate(totalMaterials, id, amount);
        });
    }

    return totalMaterials;
}
