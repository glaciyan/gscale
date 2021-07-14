import { levelingCosts } from "../data/characterLevels";
import { characters } from "../data/characters";
import { ascStageSlice, levelSlice, talentSlice } from "../lib";
import { calculateMaterials } from "../lib/characterMaterials";
import { sumLevelingCost, sumPriced } from "../lib/ItemHelper";
import { CharacterProgressions, Progression } from "../lib/MyTypes";

const kazuha = characters.kazuha;

const maxLevel: CharacterProgressions = {
    level: {
        start: 1,
        goal: 90,
    },
    normal: {
        start: 1,
        goal: 10,
    },
    elemental: {
        start: 1,
        goal: 10,
    },
    burst: {
        start: 1,
        goal: 10,
    },
};

// assuming all the previous ones are correct
test("correct amount of items in last ascension", () => {
    const mats = kazuha.materials;

    const lastAscension = mats.ascension[5];

    expect(lastAscension.mora).toEqual(120000);
    expect(lastAscension.items.length).toEqual(4);
    expect(lastAscension.items[0].amount).toEqual(6);
    expect(lastAscension.items[1].amount).toEqual(20);
    expect(lastAscension.items[2].amount).toEqual(60);
    expect(lastAscension.items[3].amount).toEqual(24);
});

test("correct amount sliced from material list", () => {
    const mats = kazuha.materials;

    expect(ascStageSlice(mats.ascension, { start: 1, goal: 90 }).length).toEqual(6);
    expect(ascStageSlice(mats.ascension, { start: 21, goal: 90 }).length).toEqual(5);
    expect(ascStageSlice(mats.ascension, { start: 41, goal: 80 }).length).toEqual(3);
    expect(ascStageSlice(mats.ascension, { start: 51, goal: 70 }).length).toEqual(1);
    expect(ascStageSlice(mats.ascension, { start: 31, goal: 40 }).length).toEqual(0);
    expect(ascStageSlice(mats.ascension, { start: 50, goal: 60 }).length).toEqual(1);
    // console.log(
    //     JSON.stringify(levelSlice(mats.ascension, { start: 51, goal: 80 }), null, 2)
    // );
});

test("correct amount of leveling cost", () => {
    expect(levelSlice(levelingCosts, { start: 1, goal: 1 }).length).toEqual(0);
    expect(levelSlice(levelingCosts, { start: 1, goal: 20 }).length).toEqual(1);
    expect(levelSlice(levelingCosts, { start: 1, goal: 40 }).length).toEqual(2);
    expect(levelSlice(levelingCosts, { start: 1, goal: 50 }).length).toEqual(3);
    expect(levelSlice(levelingCosts, { start: 1, goal: 60 }).length).toEqual(4);
    expect(levelSlice(levelingCosts, { start: 1, goal: 70 }).length).toEqual(5);
    expect(levelSlice(levelingCosts, { start: 1, goal: 80 }).length).toEqual(6);
    expect(levelSlice(levelingCosts, { start: 1, goal: 90 }).length).toEqual(7);

    expect(levelSlice(levelingCosts, { start: 30, goal: 40 }).length).toEqual(1);
    expect(levelSlice(levelingCosts, { start: 30, goal: 50 }).length).toEqual(2);
    expect(levelSlice(levelingCosts, { start: 30, goal: 60 }).length).toEqual(3);
    expect(levelSlice(levelingCosts, { start: 30, goal: 70 }).length).toEqual(4);
    expect(levelSlice(levelingCosts, { start: 30, goal: 80 }).length).toEqual(5);
    expect(levelSlice(levelingCosts, { start: 30, goal: 90 }).length).toEqual(6);

    expect(levelSlice(levelingCosts, { start: 70, goal: 80 })[0].xp).toEqual(1611875);

    const test1 = levelSlice(levelingCosts, { start: 50, goal: 80 });
    expect(test1.length).toEqual(3);
    expect(test1[0].xp + test1[1].xp + test1[2].xp).toEqual(3661925);
});

test("correct amount of talent materials", () => {
    const mats = kazuha.materials;

    expect(talentSlice(mats.normal, { start: 4, goal: 8 }).length).toEqual(4);
    // console.log(JSON.stringify(talentSlice(mats.normal, { start: 4, goal: 8 }), null, 2));
});

test("materials correct combine", () => {
    const mats = kazuha.materials;

    const slice = ascStageSlice(mats.ascension, { start: 1, goal: 90 });
    const combined = sumPriced(slice);
    combined.items[0].amount = 9999;

    expect(slice[0].items[0].amount).toEqual(1);
    expect(combined.items[2].amount).toEqual(168);

    // console.log(JSON.stringify(slice, null, 2));
    // console.log(JSON.stringify(combined, null, 2));
});

test("leveling correct combine", () => {
    const slice = levelSlice(levelingCosts, { start: 1, goal: 90 });

    // console.log(JSON.stringify(sumLevelingCost(slice), null, 2));
});

test("print everything", () => {
    const materials = calculateMaterials(characters.kazuha, {
        level: { start: 1, goal: 90 },
        normal: { start: 1, goal: 10 },
        elemental: { start: 1, goal: 10 },
        burst: { start: 1, goal: 10 },
    });

    // console.log(JSON.stringify(materials, null, 2));
});
