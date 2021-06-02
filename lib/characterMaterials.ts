import { additionOrCreate } from ".";
import { getAscensionLevel } from "./index";
import { Levels } from "../data/characterLevels";
import talentAmounts from "../data/talentAmounts";

// TODO make type sortable
type Item = { id: string; order: number; amount: number };

// there is no particular reason behind those numbers
const moraOrder = 100;
const bookOrder = 200;
const commonOrder = 300;
const talentBoosOrder = 400;
const crownOrder = 500;

export function getCharacterMaterials(character, level: Levels) {
    if (level < 2 || level > 90) return null;

    const characterData = characters[character.characterId];
    if (!characterData) return null;
    const ascension = getAscensionLevel(level);

    const materialList = characterData.ascension as {
        mora: number;
        items: any[];
    }[];

    const totalMaterials: Item[] = [];

    // todo calc

    return totalMaterials;
}

export function getTalentMaterials(character, start: number, goal: number) {
    if (start < 1 || start > 9) return null;
    if (goal < 2 || goal > 10) return null;

    const characterData = characters[character.characterId];
    if (!characterData) return null;

    const talentMaterials = characterData.material as {
        book: any[];
        material: any[];
        boss: any;
    };

    const books = {
        2: talentMaterials.book[0],
        3: talentMaterials.book[1],
        4: talentMaterials.book[2],
    };

    const common = {
        1: talentMaterials.material[0],
        2: talentMaterials.material[1],
        3: talentMaterials.material[2],
    };

    const totalMaterials: Item[] = [];

    talentAmounts.slice(start - 1, goal - 1).forEach((values) => {
        additionOrCreate(totalMaterials, moraOrder, "mora", values.mora);
        additionOrCreate(
            totalMaterials,
            bookOrder + values.book.rarity,
            books[values.book.rarity].id,
            values.book.amount
        );
        additionOrCreate(
            totalMaterials,
            commonOrder + values.common.rarity,
            common[values.common.rarity].id,
            values.common.amount
        );
        additionOrCreate(
            totalMaterials,
            talentBoosOrder,
            talentMaterials.boss.id,
            values.boss
        );
        additionOrCreate(
            totalMaterials,
            crownOrder,
            itemList.crown_of_insight.id,
            values.crown
        );
    });

    return totalMaterials.sort((a, b) => a.order - b.order);
}
