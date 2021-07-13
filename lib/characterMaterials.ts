import { getAscensionLevel, sumObjectArray } from ".";
import { xp } from "./ItemGen";
import { ascensionCosts as fullAscensionCostOf } from "../data/ascensionCost";
import { Character } from "../data/characters";
import { costsTo } from "../data/characterLevels";
import _ from "lodash";
import { BuildItem, Item, items } from "../data/items";
import itemOrder from "./itemOrder";
import { talentCost } from "../data/talentCost";
import { mora as moraGen } from "./ItemGen";
import { LevelConfig, Progression } from "./MyTypes";

export function getCharacterMaterials(character: Character, lvlCfg: LevelConfig) {
    // sanitize lvlCfg
    // get all leveling materials
    // get all ascension materials
    // get all talent materials

    // return object:
    // total mora
    // xp needed
    // leveling: {accXp, mora}
    // ascension: {mora, materials}
    // normal: {mora, materials}
    // elemental: {mora, materials}
    // burst: {mora, materials}
    // all talent materials
    // all materials (ascension and talents)

    const totalMora = 0;
    const materialTable = character.materials();
}

export function standard(
    ascension: string,
    local: string,
    common: string,
    weekly: string,
    book: string
): Item[] {}
