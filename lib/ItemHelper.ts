import { items } from "../data/items";
import itemOrder from "./itemOrder";
import { BuildItem, Item, ItemGroup, Vision } from "./MyTypes";

export function getItemFromGroup(group: ItemGroup, rarity: number): Item {
    if (group === ItemGroup.unknown) items.unknown;

    const found = Object.values(items).find(
        (item: Item) => item.group === group && item.rarity === rarity
    );

    if (!found) return items.unknown;
    return found;
}

function getGemGroup(element: Vision) {
    switch (element) {
        case "cryo":
            return ItemGroup.cryo_gem;
        case "pyro":
            return ItemGroup.pyro_gem;
        case "anemo":
            return ItemGroup.anemo_gem;
        case "electro":
            return ItemGroup.electro_gem;
        case "geo":
            return ItemGroup.geo_gem;
        case "hydro":
            return ItemGroup.hydro_gem;
        default:
            return -1;
    }
}

export function getGem(element: Vision, rarity: 2 | 3 | 4 | 5) {
    return getItemFromGroup(getGemGroup(element), rarity);
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

interface ItemGenArgs {
    ascension?: string;
    local?: string;
    weekly?: string;
    common?: ItemGroup;
    book?: ItemGroup;
    gem?: ItemGroup;
}

export class ItemGen {
    ascension?: string;
    Local?: string;
    Weekly?: string;
    Common?: ItemGroup;
    Book?: ItemGroup;
    Gem?: ItemGroup;

    constructor(args: ItemGenArgs) {
        this.ascension = args.ascension;
        this.Local = args.local;
        this.Weekly = args.weekly;
        this.Common = args.common;
        this.Book = args.book;
        this.Gem = args.gem;
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
            ...getItemFromGroup(this.character.common, rarity),
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
            ...getItemFromGroup(this.character.book, rarity),
            amount: amount,
            order: itemOrder.book + rarity,
        };
    }
}
