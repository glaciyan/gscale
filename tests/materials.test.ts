import { characters } from "../data/characters";
import { getCharacterMaterials } from "../lib/characterMaterials";
import { LevelConfig } from "../lib/MyTypes";

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
