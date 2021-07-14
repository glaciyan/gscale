import { crown, ItemGen } from "../lib/ItemHelper";
import { Character, ItemGroup } from "../lib/MyTypes";

export function talentCost(common: ItemGroup, book: ItemGroup, weekly: string) {
    const ig = new ItemGen({ common, book, weekly });

    return [
        {
            // 1 -> 2
            mora: 12500,
            items: [ig.book(2, 3), ig.common(1, 6), ig.weekly(0), crown(0)],
        },
        {
            // 2 -> 3
            mora: 17500,
            items: [ig.book(3, 2), ig.common(2, 3), ig.weekly(0), crown(0)],
        },
        {
            // 3 -> 4
            mora: 25000,
            items: [ig.book(3, 4), ig.common(2, 4), ig.weekly(0), crown(0)],
        },
        {
            // 4 -> 5
            mora: 30000,
            items: [ig.book(3, 6), ig.common(2, 6), ig.weekly(0), crown(0)],
        },
        {
            // 5 -> 6
            mora: 37500,
            items: [ig.book(3, 9), ig.common(2, 9), ig.weekly(0), crown(0)],
        },
        {
            // 6 -> 7
            mora: 120000,
            items: [ig.book(4, 4), ig.common(3, 4), ig.weekly(1), crown(0)],
        },
        {
            // 7 -> 8
            mora: 260000,
            items: [ig.book(4, 6), ig.common(3, 6), ig.weekly(1), crown(0)],
        },
        {
            // 8 -> 9
            mora: 450000,
            items: [ig.book(4, 12), ig.common(3, 9), ig.weekly(2), crown(0)],
        },
        {
            // 9 -> 10
            mora: 700000,
            items: [ig.book(4, 16), ig.common(3, 12), ig.weekly(2), crown(1)],
        },
    ];
}
