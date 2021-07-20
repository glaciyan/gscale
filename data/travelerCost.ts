import { ItemGroup, PricedMaterials } from "../lib/MyTypes";
import { crown, ItemGen } from "../lib/ItemHelper";
import { items } from "./items";

export function travelerAscensionCosts(
    gem: ItemGroup,
    local: string,
    common: ItemGroup
): PricedMaterials[] {
    const ig = new ItemGen({ gem, local, common });

    return [
        {
            // 1 20+
            mora: 20000,
            items: [ig.gem(2, 1), ig.local(3), ig.common(1, 3)],
        },
        {
            // 2 40+
            mora: 40000,
            items: [ig.gem(3, 3), ig.local(10), ig.common(1, 15)],
        },
        {
            // 3 50+
            mora: 60000,
            items: [ig.gem(3, 6), ig.local(20), ig.common(2, 12)],
        },
        {
            // 4 60+
            mora: 80000,
            items: [ig.gem(4, 3), ig.local(30), ig.common(2, 18)],
        },
        {
            // 5 70+
            mora: 100000,
            items: [ig.gem(4, 6), ig.local(45), ig.common(3, 12)],
        },
        {
            // 6 80+
            mora: 120000,
            items: [ig.gem(5, 6), ig.local(60), ig.common(3, 24)],
        },
    ];
}

export function normalTravelerTalentCost() {
    const ig = new ItemGen({ common: ItemGroup.scroll, weekly: items.dvalins_sigh.name });

    const ballad = new ItemGen({ book: ItemGroup.ballad });
    const freedom = new ItemGen({ book: ItemGroup.freedom });
    const resistance = new ItemGen({ book: ItemGroup.resistance });

    return [
        {
            // 1 -> 2
            mora: 12500,
            items: [freedom.book(2, 3), ig.common(1, 6), ig.weekly(0), crown(0)],
        },
        {
            // 2 -> 3
            mora: 17500,
            items: [resistance.book(3, 2), ig.common(2, 3), ig.weekly(0), crown(0)],
        },
        {
            // 3 -> 4
            mora: 25000,
            items: [ballad.book(3, 4), ig.common(2, 4), ig.weekly(0), crown(0)],
        },
        {
            // 4 -> 5
            mora: 30000,
            items: [freedom.book(3, 6), ig.common(2, 6), ig.weekly(0), crown(0)],
        },
        {
            // 5 -> 6
            mora: 37500,
            items: [resistance.book(3, 9), ig.common(2, 9), ig.weekly(0), crown(0)],
        },
        {
            // 6 -> 7
            mora: 120000,
            items: [ballad.book(4, 4), ig.common(3, 4), ig.weekly(1), crown(0)],
        },
        {
            // 7 -> 8
            mora: 260000,
            items: [freedom.book(4, 6), ig.common(3, 6), ig.weekly(1), crown(0)],
        },
        {
            // 8 -> 9
            mora: 450000,
            items: [resistance.book(4, 12), ig.common(3, 9), ig.weekly(2), crown(0)],
        },
        {
            // 9 -> 10
            mora: 700000,
            items: [ballad.book(4, 16), ig.common(3, 12), ig.weekly(2), crown(1)],
        },
    ];
}

export function anemoTravelerTalentCost() {
    const ig = new ItemGen({ common: ItemGroup.scroll, weekly: items.dvalins_sigh.name });

    const ballad = new ItemGen({ book: ItemGroup.ballad });
    const freedom = new ItemGen({ book: ItemGroup.freedom });
    const resistance = new ItemGen({ book: ItemGroup.resistance });

    return [
        {
            // 1 -> 2
            mora: 12500,
            items: [freedom.book(2, 3), ig.common(1, 6), ig.weekly(0), crown(0)],
        },
        {
            // 2 -> 3
            mora: 17500,
            items: [resistance.book(3, 2), ig.common(2, 3), ig.weekly(0), crown(0)],
        },
        {
            // 3 -> 4
            mora: 25000,
            items: [ballad.book(3, 4), ig.common(2, 4), ig.weekly(0), crown(0)],
        },
        {
            // 4 -> 5
            mora: 30000,
            items: [freedom.book(3, 6), ig.common(2, 6), ig.weekly(0), crown(0)],
        },
        {
            // 5 -> 6
            mora: 37500,
            items: [resistance.book(3, 9), ig.common(2, 9), ig.weekly(0), crown(0)],
        },
        {
            // 6 -> 7
            mora: 120000,
            items: [ballad.book(4, 4), ig.common(3, 4), ig.weekly(1), crown(0)],
        },
        {
            // 7 -> 8
            mora: 260000,
            items: [freedom.book(4, 6), ig.common(3, 6), ig.weekly(1), crown(0)],
        },
        {
            // 8 -> 9
            mora: 450000,
            items: [resistance.book(4, 12), ig.common(3, 9), ig.weekly(2), crown(0)],
        },
        {
            // 9 -> 10
            mora: 700000,
            items: [ballad.book(4, 16), ig.common(3, 12), ig.weekly(2), crown(1)],
        },
    ];
}

export function geoTravelerTalentCost() {
    const ig = new ItemGen({
        common: ItemGroup.arrowhead,
        weekly: items.tail_of_boreas.name,
    });

    const ballad = new ItemGen({ book: ItemGroup.gold });
    const freedom = new ItemGen({ book: ItemGroup.prosperity });
    const resistance = new ItemGen({ book: ItemGroup.diligence });

    return [
        {
            // 1 -> 2
            mora: 12500,
            items: [freedom.book(2, 3), ig.common(1, 6), ig.weekly(0), crown(0)],
        },
        {
            // 2 -> 3
            mora: 17500,
            items: [resistance.book(3, 2), ig.common(2, 3), ig.weekly(0), crown(0)],
        },
        {
            // 3 -> 4
            mora: 25000,
            items: [ballad.book(3, 4), ig.common(2, 4), ig.weekly(0), crown(0)],
        },
        {
            // 4 -> 5
            mora: 30000,
            items: [freedom.book(3, 6), ig.common(2, 6), ig.weekly(0), crown(0)],
        },
        {
            // 5 -> 6
            mora: 37500,
            items: [resistance.book(3, 9), ig.common(2, 9), ig.weekly(0), crown(0)],
        },
        {
            // 6 -> 7
            mora: 120000,
            items: [ballad.book(4, 4), ig.common(3, 4), ig.weekly(1), crown(0)],
        },
        {
            // 7 -> 8
            mora: 260000,
            items: [freedom.book(4, 6), ig.common(3, 6), ig.weekly(1), crown(0)],
        },
        {
            // 8 -> 9
            mora: 450000,
            items: [resistance.book(4, 12), ig.common(3, 9), ig.weekly(2), crown(0)],
        },
        {
            // 9 -> 10
            mora: 700000,
            items: [ballad.book(4, 16), ig.common(3, 12), ig.weekly(2), crown(1)],
        },
    ];
}
