import { Item, items } from "../data/items";
import { Vision } from "../data/characters";

export function getItem(group: string | null, rarity: number): Item {
    if (group === null) return items.null;
    const found = Object.values(items).find(
        (item: Item) => item.group === group && item.rarity === rarity
    );

    if (!found) return items.nothing;
    return found;
}

export function getGem(element: Vision, rarity: 2 | 3 | 4 | 5) {
    return getItem(`${element}_gem`, rarity);
}
