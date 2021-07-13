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

test("correct leveling mora", () => {
    console.log(kazuha.materials());
});
