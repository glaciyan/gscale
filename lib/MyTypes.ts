import { StandardCharacterMaterialsArgs } from "./characterMaterials";

export interface Character {
    id: string;
    name: string;
    rarity: 4 | 5;
    constellation: string;
    description: string;
    element: Vision;
    weapon: Weapon;
    sub: string;
    materials: CharacterMaterials & { list: StandardCharacterMaterialsArgs };
}

export interface CharacterMaterials {
    ascension: PricedMaterials[];
    normal: PricedMaterials[];
    elemental: PricedMaterials[];
    burst: PricedMaterials[];
}

export type Vision = "cryo" | "pyro" | "geo" | "electro" | "anemo" | "hydro";

export type Weapon = "bow" | "catalyst" | "claymore" | "polearm" | "sword";

export interface Characters {
    [id: string]: Character;
}

export enum ItemGroup {
    unknown = -1,
    pyro_gem,
    geo_gem,
    cryo_gem,
    electro_gem,
    hydro_gem,
    anemo_gem,
    traveler_gem,
    scroll,
    arrowhead,
    treasure_hoarder_insignia,
    mask,
    fatui_insignia,
    nectar,
    slime,
    chaos,
    horn,
    bone_shard,
    sacrificial_knife,
    mist_grass,
    ley_line,
    ballad,
    freedom,
    gold,
    resistance,
    diligence,
    prosperity,
    dandelion_gladiator,
    decarabians,
    aerosiderite,
    guyun,
    mist_elixir,
    wolf_tooth,
}

export interface Item {
    name: string;
    rarity: number | null;
    group?: ItemGroup;
    alias?: string;
    xp?: number;
}

export type Items = { [id: string]: Item };

export type BuildItem = Item & { order: number; amount: number };

export type Progression = { start: number; goal: number };

export interface CharacterProgressions {
    level: Progression;
    normal: Progression;
    elemental: Progression;
    burst: Progression;
}

export interface PricedMaterials {
    mora: number;
    items: BuildItem[];
}

export type Materials = BuildItem[];

export interface LevelUpCost {
    xp: number;
    mora: number;
    accurate: [number, number, number];
}
