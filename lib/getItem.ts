import { items } from "../data/items";
import { Item, Vision } from "./MyTypes";

export function getItem(group: string, rarity: number): Item {
    const found = Object.values(items).find(
        (item: Item) => item.group === group && item.rarity === rarity
    );

    if (!found) return items.nothing;
    return found;
}

export function getGem(element: Vision, rarity: 2 | 3 | 4 | 5) {
    return getItem(`${element}_gem`, rarity);
}
