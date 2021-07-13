import { Character } from "../lib/MyTypes";
import { ItemGen } from "../lib/ItemHelper";

export function ascensionCosts(gem, boss, local, common) {
    const ig = new ItemGen(character);

    return [
        {
            // 1 20+
            mora: 20000,
            items: [ig.gem(2, 1), ig.boss(0), ig.local(3), ig.common(1, 3)],
        },
        {
            // 2 40+
            mora: 40000,
            items: [ig.gem(3, 3), ig.boss(2), ig.local(10), ig.common(1, 15)],
        },
        {
            // 3 50+
            mora: 60000,
            items: [ig.gem(3, 6), ig.boss(4), ig.local(20), ig.common(2, 12)],
        },
        {
            // 4 60+
            mora: 80000,
            items: [ig.gem(4, 3), ig.boss(8), ig.local(30), ig.common(2, 18)],
        },
        {
            // 5 70+
            mora: 100000,
            items: [ig.gem(4, 6), ig.boss(12), ig.local(45), ig.common(3, 12)],
        },
        {
            // 6 80+
            mora: 120000,
            items: [ig.gem(5, 6), ig.boss(20), ig.local(60), ig.common(3, 24)],
        },
    ];
}
