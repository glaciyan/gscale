import _ from "lodash";
import { ascStageSlice, getAscensionLevel, levelSlice, talentSlice } from ".";
import { ascensionCosts } from "../data/ascensionCost";
import { levelingCosts } from "../data/characterLevels";
import { talentCost } from "../data/talentCost";
import { sumLevelingCost, sumPriced } from "./ItemHelper";
import {
    BuildItem,
    Character,
    CharacterMaterials,
    Item,
    ItemGroup,
    CharacterProgressions,
    PricedMaterials,
} from "./MyTypes";

export interface StandardCharacterMaterialsArgs {
    boss: string;
    local: string;
    weekly: string;
    common: ItemGroup;
    book: ItemGroup;
    gem: ItemGroup;
}

export function standard(list: StandardCharacterMaterialsArgs): CharacterMaterials {
    return {
        ascension: ascensionCosts(list.gem, list.local, list.common, list.boss),
        normal: talentCost(list.common, list.book, list.weekly),
        elemental: talentCost(list.common, list.book, list.weekly),
        burst: talentCost(list.common, list.book, list.weekly),
    };
}

export function calculateMaterials(
    character: Character,
    progressions: CharacterProgressions
) {
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

    // filter materials with level
    const requiredLevels = levelSlice(levelingCosts, progressions.level);
    const requiredAscensions = ascStageSlice(materialTable.ascension, progressions.level);
    const requiredTalents = {
        normal: talentSlice(materialTable.normal, progressions.normal),
        elemental: talentSlice(materialTable.elemental, progressions.elemental),
        burst: talentSlice(materialTable.burst, progressions.burst),
    };

    // sum all the arrays together
    const summedRequiredLevels = sumLevelingCost(requiredLevels);
    const summedRequiredAscension = sumPriced(requiredAscensions);
    const summedRequiredTalents = {
        normal: sumPriced(requiredTalents.normal),
        elemental: sumPriced(requiredTalents.elemental),
        burst: sumPriced(requiredTalents.burst),
    };
}
