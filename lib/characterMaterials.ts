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
    Materials,
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

export interface MaterialCalculation {
    totalMora: number;
    totalXp: number;
    accurateXpBook: [number, number, number];
    ascension: Materials;
    normal: Materials;
    elemental: Materials;
    burst: Materials;
    talents: Materials;
    everything: Materials;
    materialNames: string[];
}

export function calculateMaterials(
    character: Character,
    progressions: CharacterProgressions
): MaterialCalculation {
    // sanitize lvlCfg
    // get all leveling materials
    // get all ascension materials
    // get all talent materials

    // return object:
    // total mora
    // xp needed
    // accXp
    // ascension: {mora, materials}
    // normal: {mora, materials}
    // elemental: {mora, materials}
    // burst: {mora, materials}
    // all talent materials
    // all materials (ascension and talents)
    // all item names

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

    // sum all talents
    const talents = sumPriced([
        summedRequiredTalents.normal,
        summedRequiredTalents.elemental,
        summedRequiredTalents.burst,
    ]);
    talents.items.sort((a, b) => a.order - b.order);

    // sum everything axcept leveling
    const talentsAndAscension = sumPriced([talents, summedRequiredAscension]);
    talentsAndAscension.items.sort((a, b) => a.order - b.order);

    const totalMora = talentsAndAscension.mora + summedRequiredLevels.mora;

    const materialNames = talentsAndAscension.items.map((item) => {
        return item.name;
    });

    return {
        totalMora,
        totalXp: summedRequiredLevels.xp,
        accurateXpBook: summedRequiredLevels.accurate,
        ascension: summedRequiredAscension.items,
        normal: summedRequiredTalents.normal.items,
        elemental: summedRequiredTalents.elemental.items,
        burst: summedRequiredTalents.burst.items,
        talents: talents.items,
        everything: talentsAndAscension.items,
        materialNames,
    };
}
