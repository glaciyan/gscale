import { Character } from "./characters";
import { ItemGen } from "../lib/ItemGen";

export function ascensionCosts(character: Character) {
    const c = new ItemGen(character);

    return [
        {
            // 1 20+
            mora: 20000,
            items: [c.gem(2, 1), c.boss(0), c.local(3), c.common(1, 3)],
        },
        {
            // 2 40+
            mora: 40000,
            items: [c.gem(3, 3), c.boss(2), c.local(10), c.common(1, 15)],
        },
        {
            // 3 50+
            mora: 60000,
            items: [c.gem(3, 6), c.boss(4), c.local(20), c.common(2, 12)],
        },
        {
            // 4 60+
            mora: 80000,
            items: [c.gem(4, 3), c.boss(8), c.local(30), c.common(2, 18)],
        },
        {
            // 5 70+
            mora: 100000,
            items: [c.gem(4, 6), c.boss(12), c.local(45), c.common(3, 12)],
        },
        {
            // 6 80+
            mora: 120000,
            items: [c.gem(5, 6), c.boss(20), c.local(60), c.common(3, 24)],
        },
    ];
}
