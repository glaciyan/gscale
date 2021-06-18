import { toId } from ".";
import itemOrder from "./itemOrder";
import { Character } from "../data/characters";
import { itemsTyped, BuildItem } from "../data/items";
import { getItem } from "./getItem";
import { getGem } from "./getItem";

export class ItemGen {
    character: Character;

    constructor(character: Character) {
        this.character = character;
    }

    gem(rarity: 2 | 3 | 4 | 5, amount: number): BuildItem {
        return {
            ...getGem(this.character.element, rarity),
            amount: amount,
            order: itemOrder.gem + rarity,
        };
    }

    local(amount: number): BuildItem {
        return {
            ...itemsTyped[toId(this.character.local)],
            amount: amount,
            order: itemOrder.local,
        };
    }

    common(rarity: 1 | 2 | 3, amount: number): BuildItem {
        return {
            ...getItem(this.character.common, rarity),
            amount: amount,
            order: itemOrder.common + rarity,
        };
    }

    boss(amount: number): BuildItem {
        return {
            ...itemsTyped[toId(this.character.ascension)],
            amount: amount,
            order: itemOrder.boss,
        };
    }

    weekly(amount: number): BuildItem {
        return {
            ...itemsTyped[toId(this.character.weekly)],
            amount: amount,
            order: itemOrder.talentBoss,
        };
    }

    book(rarity: 2 | 3 | 4, amount: number): BuildItem {
        return {
            ...getItem(this.character.book, rarity),
            amount: amount,
            order: itemOrder.book + rarity,
        };
    }
}
