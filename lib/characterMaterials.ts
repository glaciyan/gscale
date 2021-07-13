import _ from "lodash";
import { Character, Item, ItemGroup, LevelConfig } from "./MyTypes";

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

    const totalMora = 0;
    const materialTable = character.materials();
}

export interface CharacterMaterials {
    ascension: string;
    local: string;
    weekly: string;
    common: ItemGroup;
    book: ItemGroup;
}

export function standard(list: CharacterMaterials): Item[] {
    console.log(list);

    return [];
}
