import _ from "lodash";
import { ascensionCosts } from "../data/ascensionCost";
import { talentCost } from "../data/talentCost";
import {
    BuildItem,
    Character,
    CharacterMaterials,
    Item,
    ItemGroup,
    LevelConfig,
    PricedMaterials,
} from "./MyTypes";

export interface MaterialList {
    mora: number;
    xp: number;
    // level:
}

export function getCharacterMaterials(character: Character, _lvlCfg: LevelConfig) {
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
    // all item names

    const totalMora = 0;
    const materialTable = character.materials;
}

export interface CharacterMaterialsArgs {
    boss: string;
    local: string;
    weekly: string;
    common: ItemGroup;
    book: ItemGroup;
    gem: ItemGroup;
}

export function standard(list: CharacterMaterialsArgs): CharacterMaterials {
    return {
        ascension: ascensionCosts(list.gem, list.local, list.common, list.boss),
        normal: talentCost(list.common, list.book, list.weekly),
        elemental: talentCost(list.common, list.book, list.weekly),
        burst: talentCost(list.common, list.book, list.weekly),
    };
}
