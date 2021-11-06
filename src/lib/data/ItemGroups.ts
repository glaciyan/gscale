import { IdIndex } from "./contracts/UsingId";
import { IItemGroup } from "./contracts/IItemGroup";
import { Items } from "./Items";

export const ItemGroups: IdIndex<IItemGroup> = {
    unknown: {
        itemIds: [Items.unknown, Items.unknown, Items.unknown, Items.unknown],
    },
    spectral: {
        itemIds: [Items.spectral_nucleus, Items.spectral_heart, Items.spectral_husk],
    },
    light: {
        itemIds: [Items.teachings_of_light, Items.guide_to_light, Items.philosophies_of_light],
    },
    transience: {
        itemIds: [Items.teachings_of_transience, Items.guide_to_transience, Items.philosophies_of_transience],
    },
    handguard: {
        itemIds: [Items.old_handguard, Items.kageuchi_handguard, Items.famed_handguard],
    },
    elegance: {
        itemIds: [Items.teachings_of_elegance, Items.guide_to_elegance, Items.philosophies_of_elegance],
    },
    pyro_gem: {
        itemIds: [
            Items.agnidus_agate_sliver,
            Items.agnidus_agate_fragment,
            Items.agnidus_agate_chunk,
            Items.agnidus_agate_gemstone,
        ],
    },
    geo_gem: {
        itemIds: [
            Items.prithiva_topaz_sliver,
            Items.prithiva_topaz_fragment,
            Items.prithiva_topaz_chunk,
            Items.prithiva_topaz_gemstone,
        ],
    },
    cryo_gem: {
        itemIds: [
            Items.shivada_jade_sliver,
            Items.shivada_jade_fragment,
            Items.shivada_jade_chunk,
            Items.shivada_jade_gemstone,
        ],
    },
    electro_gem: {
        itemIds: [
            Items.vajrada_amethyst_sliver,
            Items.vajrada_amethyst_fragment,
            Items.vajrada_amethyst_chunk,
            Items.vajrada_amethyst_gemstone,
        ],
    },
    hydro_gem: {
        itemIds: [
            Items.varunada_lazurite_sliver,
            Items.varunada_lazurite_fragment,
            Items.varunada_lazurite_chunk,
            Items.varunada_lazurite_gemstone,
        ],
    },
    anemo_gem: {
        itemIds: [
            Items.vayuda_turquoise_sliver,
            Items.vayuda_turquoise_fragment,
            Items.vayuda_turquoise_chunk,
            Items.vayuda_turquoise_gemstone,
        ],
    },
    traveler_gem: {
        itemIds: [
            Items.brilliant_diamond_sliver,
            Items.brilliant_diamond_fragment,
            Items.brilliant_diamond_chunk,
            Items.brilliant_diamond_gemstone,
        ],
    },
    scroll: {
        itemIds: [Items.divining_scroll, Items.sealed_scroll, Items.forbidden_curse_scroll],
    },
    arrowhead: {
        itemIds: [Items.firm_arrowhead, Items.sharp_arrowhead, Items.weathered_arrowhead],
    },
    treasure_hoarder_insignia: {
        itemIds: [Items.treasure_hoarder_insignia, Items.silver_raven_insignia, Items.golden_raven_insignia],
    },
    mask: {
        itemIds: [Items.damaged_mask, Items.stained_mask, Items.ominous_mask],
    },
    fatui_insignia: {
        itemIds: [Items.recruits_insignia, Items.sergeants_insignia, Items.lieutenants_insignia],
    },
    nectar: {
        itemIds: [Items.whopperflower_nectar, Items.shimmering_nectar, Items.energy_nectar],
    },
    slime: {
        itemIds: [Items.slime_condensate, Items.slime_secretions, Items.slime_concentrate],
    },
    chaos: {
        itemIds: [Items.chaos_device, Items.chaos_circuit, Items.chaos_core],
    },
    horn: {
        itemIds: [Items.heavy_horn, Items.black_bronze_horn, Items.black_crystal_horn],
    },
    bone_shard: {
        itemIds: [Items.fragile_bone_shard, Items.sturdy_bone_shard, Items.fossilized_bone_shard],
    },
    sacrificial_knife: {
        itemIds: [Items.hunters_sacrificial_knife, Items.agents_sacrificial_knife, Items.inspectors_sacrificial_knife],
    },
    mist_grass: {
        itemIds: [Items.mist_grass_pollen, Items.mist_grass, Items.mist_grass_wick],
    },
    ley_line: {
        itemIds: [Items.dead_ley_line_branch, Items.dead_ley_line_leaves, Items.ley_line_sprouts],
    },
    ballad: {
        itemIds: [Items.teachings_of_ballad, Items.guide_to_ballad, Items.philosophies_of_ballad],
    },
    freedom: {
        itemIds: [Items.teachings_of_freedom, Items.guide_to_freedom, Items.philosophies_of_freedom],
    },
    gold: {
        itemIds: [Items.teachings_of_gold, Items.guide_to_gold, Items.philosophies_of_gold],
    },
    resistance: {
        itemIds: [Items.teachings_of_resistance, Items.guide_to_resistance, Items.philosophies_of_resistance],
    },
    diligence: {
        itemIds: [Items.teachings_of_diligence, Items.guide_to_diligence, Items.philosophies_of_diligence],
    },
    prosperity: {
        itemIds: [Items.teachings_of_prosperity, Items.guide_to_prosperity, Items.philosophies_of_prosperity],
    },
    dandelion_gladiator: {
        itemIds: [
            Items.fetters_of_the_dandelion_gladiator,
            Items.chains_of_the_dandelion_gladiator,
            Items.shackles_of_the_dandelion_gladiator,
            Items.dream_of_the_dandelion_gladiator,
        ],
    },
    decarabians: {
        itemIds: [
            Items.tile_of_decarabians_tower,
            Items.debris_of_decarabians_city,
            Items.fragment_of_decarabians_epic,
            Items.scattered_piece_of_decarabians_dream,
        ],
    },
    aerosiderite: {
        itemIds: [
            Items.grain_of_aerosiderite,
            Items.piece_of_aerosiderite,
            Items.bit_of_aerosiderite,
            Items.chunk_of_aerosiderite,
        ],
    },
    guyun: {
        itemIds: [
            Items.luminous_sands_from_guyun,
            Items.lustrous_stone_from_guyun,
            Items.relic_from_guyun,
            Items.divine_body_from_guyun,
        ],
    },
    mist_elixir: {
        itemIds: [
            Items.mist_veiled_lead_elixir,
            Items.mist_veiled_mercury_elixir,
            Items.mist_veiled_gold_elixir,
            Items.mist_veiled_primo_elixir,
        ],
    },
    wolf_tooth: {
        itemIds: [
            Items.boreal_wolfs_milk_tooth,
            Items.boreal_wolfs_cracked_tooth,
            Items.boreal_wolfs_broken_fang,
            Items.boreal_wolfs_nostalgia,
        ],
    },
};
