import { toId } from ".";
import itemOrder from "./itemOrder";
import { itemsTyped, items } from "../data/items";
import { getItem } from "./getItem";
import { getGem } from "./getItem";
import { BuildItem, Character } from "./MyTypes";

export function mora(amount: number): BuildItem {
    return {
        name: "Mora",
        rarity: 1,
        amount: amount,
        order: itemOrder.mora,
    };
}

export function crown(amount: number): BuildItem {
    return {
        name: "Crown of Insight",
        rarity: 5,
        amount: amount,
        order: itemOrder.crown,
    };
}

export function xp(rarity: 2 | 3 | 4, amount: number): BuildItem {
    let xpItem;
    switch (rarity) {
        case 2:
            xpItem = items.wanderers_advice;
            break;
        case 3:
            xpItem = items.adventurers_experience;
            break;
        case 4:
            xpItem = items.heros_wit;
            break;
    }

    return {
        name: xpItem.name,
        rarity: xpItem.rarity,
        amount: amount,
        order: itemOrder.xpAccurate - xpItem.rarity,
    };
}

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
