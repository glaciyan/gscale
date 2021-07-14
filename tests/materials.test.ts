import { characters } from "../data/characters";
import { levelSlice } from "../lib";
import { getCharacterMaterials } from "../lib/characterMaterials";
import { LevelConfig, Progression } from "../lib/MyTypes";

const kazuha = characters.kazuha;

const maxLevel: LevelConfig = {
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

    expect(levelSlice(mats.ascension, { start: 1, goal: 90 }).length).toEqual(6);
    expect(levelSlice(mats.ascension, { start: 21, goal: 90 }).length).toEqual(5);
    expect(levelSlice(mats.ascension, { start: 41, goal: 80 }).length).toEqual(3);
    expect(levelSlice(mats.ascension, { start: 51, goal: 70 }).length).toEqual(1);
    expect(levelSlice(mats.ascension, { start: 31, goal: 40 }).length).toEqual(0);
    expect(levelSlice(mats.ascension, { start: 50, goal: 60 }).length).toEqual(1);
    // console.log(
    //     JSON.stringify(levelSlice(mats.ascension, { start: 51, goal: 80 }), null, 2)
    // );
});
