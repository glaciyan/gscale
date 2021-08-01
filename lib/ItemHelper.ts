import { toId } from ".";
import { LevelUpCostIndexed } from "../data/characterLevels";
import { items, itemsArray } from "../data/items";
import itemOrder from "./itemOrder";
import {
    BuildItem,
    Item,
    ItemGroup,
    LevelUpCost,
    PricedMaterials,
    Vision,
} from "./MyTypes";

export function getItemFromGroup(group: ItemGroup | undefined, rarity: number): Item {
    const found = Object.values(items).find(
        (item: Item) => item.group === group && item.rarity === rarity
    );

    return found ?? items.error;
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
    boss?: string;
    local?: string;
    weekly?: string;
    common?: ItemGroup;
    book?: ItemGroup;
    gem?: ItemGroup;
}

function getFromItemsArray(name?: string) {
    return !name ? items.error : itemsArray[toId(name)];
}

export class ItemGen {
    Boss?: string;
    Local?: string;
    Weekly?: string;
    Common?: ItemGroup;
    Book?: ItemGroup;
    Gem?: ItemGroup;

    constructor(args: ItemGenArgs) {
        this.Boss = args.boss;
        this.Local = args.local;
        this.Weekly = args.weekly;
        this.Common = args.common;
        this.Book = args.book;
        this.Gem = args.gem;
    }

    gem(rarity: 2 | 3 | 4 | 5, amount: number): BuildItem {
        return {
            ...getItemFromGroup(this.Gem, rarity),
            amount: amount,
            order: itemOrder.gem + rarity,
        };
    }

    local(amount: number): BuildItem {
        return {
            ...getFromItemsArray(this.Local),
            amount: amount,
            order: itemOrder.local,
        };
    }

    common(rarity: 1 | 2 | 3, amount: number): BuildItem {
        return {
            ...getItemFromGroup(this.Common, rarity),
            amount: amount,
            order: itemOrder.common + rarity,
        };
    }

    boss(amount: number): BuildItem {
        return {
            ...getFromItemsArray(this.Boss),
            amount: amount,
            order: itemOrder.boss,
        };
    }

    weekly(amount: number): BuildItem {
        return {
            ...getFromItemsArray(this.Weekly),
            amount: amount,
            order: itemOrder.talentBoss,
        };
    }

    book(rarity: 2 | 3 | 4, amount: number): BuildItem {
        return {
            ...getItemFromGroup(this.Book, rarity),
            amount: amount,
            order: itemOrder.book + rarity,
        };
    }
}

export function sumPriced(arr: PricedMaterials[]): PricedMaterials {
    // assuming the array contains all the same items, 0 or more
    let out: PricedMaterials = { mora: 0, items: [] };
    arr.forEach((a) => {
        a.items.forEach((arrItem) => {
            const sameName = out.items.find((outVal) => outVal.name === arrItem.name);

            if (sameName) {
                sameName.amount += arrItem.amount;
            } else {
                out.items.push({ ...arrItem });
            }
        });
        out.mora += a.mora;
    });

    return out;
}

export function sumLevelingCost(arr: LevelUpCostIndexed[]) {
    const out: LevelUpCost = { xp: 0, mora: 0, accurate: [0, 0, 0] };

    arr.forEach((cost) => {
        out.xp += cost.xp;
        out.mora += cost.mora;
        out.accurate[0] += cost.accurate[0];
        out.accurate[1] += cost.accurate[1];
        out.accurate[2] += cost.accurate[2];
    });

    return out;
}

export const hero = (xp: number) => Math.ceil(xp / items.heros_wit.xp);
