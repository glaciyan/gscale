import { ItemGen } from "../lib/ItemGen";
import { Character } from "../lib/MyTypes";

export function ascensionCosts(character: Character) {
    const item = new ItemGen(character);

    return [
        {
            // 1 20+
            mora: 20000,
            items: [item.gem(2, 1), item.boss(0), item.local(3), item.common(1, 3)],
        },
        {
            // 2 40+
            mora: 40000,
            items: [item.gem(3, 3), item.boss(2), item.local(10), item.common(1, 15)],
        },
        {
            // 3 50+
            mora: 60000,
            items: [item.gem(3, 6), item.boss(4), item.local(20), item.common(2, 12)],
        },
        {
            // 4 60+
            mora: 80000,
            items: [item.gem(4, 3), item.boss(8), item.local(30), item.common(2, 18)],
        },
        {
            // 5 70+
            mora: 100000,
            items: [item.gem(4, 6), item.boss(12), item.local(45), item.common(3, 12)],
        },
        {
            // 6 80+
            mora: 120000,
            items: [item.gem(5, 6), item.boss(20), item.local(60), item.common(3, 24)],
        },
    ];
}
