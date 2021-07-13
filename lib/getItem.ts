import { items } from "../data/items";
import { Item, ItemGroup, Vision } from "./MyTypes";

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
