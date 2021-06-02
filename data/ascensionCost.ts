import { toId } from "../lib";
import itemOrder from "../lib/itemOrder";
import { Character } from "./characters";
import { getGem, getItem, itemsTyped, BuildItem } from "./items";

export default function ascensionCosts(character: Character) {
    function mora(amount: number): BuildItem {
        return {
            name: "mora",
            rarity: 1,
            amount: amount,
            order: itemOrder.mora,
        };
    }

    function gem(rarity: 2 | 3 | 4 | 5, amount: number): BuildItem {
        return {
            ...getGem(character.element, rarity),
            amount: amount,
            order: itemOrder.gem + rarity,
        };
    }

    function local(amount: number): BuildItem {
        return {
            ...itemsTyped[character.local],
            amount: amount,
            order: itemOrder.local,
        };
    }

    function common(rarity: 1 | 2 | 3, amount: number): BuildItem {
        return {
            ...getItem(character.common, rarity),
            amount: amount,
            order: itemOrder.common + rarity,
        };
    }

    function boss(amount: number): BuildItem {
        return {
            ...itemsTyped[toId(character.ascension)],
            amount: amount,
            order: itemOrder.boss,
        };
    }

    return [
        [mora(20000), gem(2, 1), boss(0), local(3), common(1, 3)], // 1 20+
        [mora(40000), gem(3, 3), boss(2), local(10), common(1, 15)], // 2 40+
        [mora(60000), gem(3, 6), boss(4), local(20), common(2, 12)], // 3 50+
        [mora(80000), gem(4, 3), boss(8), local(30), common(2, 19)], // 4 60+
        [mora(100000), gem(4, 6), boss(12), local(45), common(3, 12)], // 5 70+
        [mora(120000), gem(5, 6), boss(20), local(60), common(3, 24)], // 6 80+
    ];
}
