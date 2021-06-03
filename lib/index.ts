import { BuildItem, items } from "../data/items";
import itemOrder from "./itemOrder";

export function toId(name: string) {
    if (!name) return null;
    return name.trim().replace(/'/g, "").replace(/[ -]/g, "_").toLowerCase();
}

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

// combines objects inside of an array based of a given field(distinction) and sums up the specified numberField
export function sumObjectArray(array: any[], distinction: string, numberField: string) {
    const out: any[] = [];
    array.forEach((arrayItem) => {
        const match = out.find((value) => value[distinction] === arrayItem[distinction]);

        if (match) {
            match[numberField] += arrayItem[numberField];
        } else {
            out.push(arrayItem);
        }
    });

    return out;
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
