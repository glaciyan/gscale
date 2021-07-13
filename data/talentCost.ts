import { crown } from "../lib/ItemHelper";
import { Character } from "../lib/MyTypes";

export function talentCost(character: Character) {
    const item = new ItemGen(character);

    return [
        {
            // 1 -> 2
            mora: 12500,
            items: [item.book(2, 3), item.common(1, 6)],
        },
        {
            // 2 -> 3
            mora: 17500,
            items: [item.book(3, 2), item.common(2, 3)],
        },
        {
            // 3 -> 4
            mora: 25000,
            items: [item.book(3, 4), item.common(2, 4)],
        },
        {
            // 4 -> 5
            mora: 30000,
            items: [item.book(3, 6), item.common(2, 6)],
        },
        {
            // 5 -> 6
            mora: 37500,
            items: [item.book(3, 9), item.common(2, 9)],
        },
        {
            // 6 -> 7
            mora: 120000,
            items: [item.book(4, 4), item.common(3, 4), item.weekly(1)],
        },
        {
            // 7 -> 8
            mora: 260000,
            items: [item.book(4, 6), item.common(3, 6), item.weekly(1)],
        },
        {
            // 8 -> 9
            mora: 450000,
            items: [item.book(4, 12), item.common(3, 9), item.weekly(2)],
        },
        {
            // 9 -> 10
            mora: 700000,
            items: [item.book(4, 16), item.common(3, 12), item.weekly(2), crown(1)],
        },
    ];
}
