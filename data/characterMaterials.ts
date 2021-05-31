import { getAscensionLevel } from "./characterLevels";
import { Levels } from "./characterLevels";
import { characters } from "./characters";

export function getCharacterMaterials(characterId, level: Levels) {
    const character = characters[characterId];
    if (!character) return null;
    const ascension = getAscensionLevel(level);

    const materialList = character.ascension as {
        mora: number;
        items: any[];
    }[];

    const totalMaterials: { id: string; amount: number }[] = [];

    for (let i = 0; i <= ascension; i++) {
        const element = materialList[i];

        element.items.forEach(({ item, amount }) => {
            const id = item.id;
            if (amount === null) return;

            const sameIdEntry = totalMaterials.find((entry) => entry.id === id);

            console.log(
                `%c${id} ${amount}`,
                "color: lightblue;font-size: x-large"
            );

            if (sameIdEntry !== undefined) {
                sameIdEntry.amount += amount;
            } else {
                totalMaterials.push({ id: id, amount: amount });
            }
        });
    }

    return totalMaterials;
}
