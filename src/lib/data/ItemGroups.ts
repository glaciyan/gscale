import { IItemGroup } from "./contracts/IItemGroup";
import { Items } from "./Items";
import ItemGroupsKey from "./keys/ItemGroupsKey";

export const ItemGroups: { [key in ItemGroupsKey]: IItemGroup } = {
  unknown: { normalizedName: "unknown", itemIds: [Items.unknown, Items.unknown, Items.unknown, Items.unknown] },

  sentinel_gear: {
    normalizedName: "sentinel_gear",
    itemIds: [Items.chaos_gear, Items.chaos_axis, Items.chaos_oculus],
  },
  prism: {
    normalizedName: "prism",
    itemIds: [Items.dismal_prism, Items.crystal_prism, Items.polarizing_prism],
  },
  oni_mask: {
    normalizedName: "oni_mask",
    itemIds: [Items.mask_of_the_wicked_lieutenant, Items.mask_of_the_tigers_bite, Items.mask_of_the_one_horned],
  },
  coral: {
    normalizedName: "coral",
    itemIds: [
      Items.coral_branch_of_a_distant_sea,
      Items.jeweled_branch_of_a_distant_sea,
      Items.jade_branch_of_a_distant_sea,
    ],
  },
  claw: {
    normalizedName: "claw",
    itemIds: [Items.concealed_claw, Items.concealed_unguis, Items.concealed_talon],
  },
  narukami: {
    normalizedName: "narukami",
    itemIds: [Items.narukamis_wisdom, Items.narukamis_joy, Items.narukamis_affection],
  },
  spectral: {
    normalizedName: "spectral",
    itemIds: [Items.spectral_nucleus, Items.spectral_heart, Items.spectral_husk],
  },
  light: {
    normalizedName: "light",
    itemIds: [Items.teachings_of_light, Items.guide_to_light, Items.philosophies_of_light],
  },
  transience: {
    normalizedName: "transience",
    itemIds: [Items.teachings_of_transience, Items.guide_to_transience, Items.philosophies_of_transience],
  },
  handguard: {
    normalizedName: "handguard",
    itemIds: [Items.old_handguard, Items.kageuchi_handguard, Items.famed_handguard],
  },
  elegance: {
    normalizedName: "elegance",
    itemIds: [Items.teachings_of_elegance, Items.guide_to_elegance, Items.philosophies_of_elegance],
  },
  pyro_gem: {
    normalizedName: "pyro_gem",
    itemIds: [
      Items.agnidus_agate_sliver,
      Items.agnidus_agate_fragment,
      Items.agnidus_agate_chunk,
      Items.agnidus_agate_gemstone,
    ],
  },
  geo_gem: {
    normalizedName: "geo_gem",
    itemIds: [
      Items.prithiva_topaz_sliver,
      Items.prithiva_topaz_fragment,
      Items.prithiva_topaz_chunk,
      Items.prithiva_topaz_gemstone,
    ],
  },
  cryo_gem: {
    normalizedName: "cryo_gem",
    itemIds: [
      Items.shivada_jade_sliver,
      Items.shivada_jade_fragment,
      Items.shivada_jade_chunk,
      Items.shivada_jade_gemstone,
    ],
  },
  electro_gem: {
    normalizedName: "electro_gem",
    itemIds: [
      Items.vajrada_amethyst_sliver,
      Items.vajrada_amethyst_fragment,
      Items.vajrada_amethyst_chunk,
      Items.vajrada_amethyst_gemstone,
    ],
  },
  hydro_gem: {
    normalizedName: "hydro_gem",
    itemIds: [
      Items.varunada_lazurite_sliver,
      Items.varunada_lazurite_fragment,
      Items.varunada_lazurite_chunk,
      Items.varunada_lazurite_gemstone,
    ],
  },
  anemo_gem: {
    normalizedName: "anemo_gem",
    itemIds: [
      Items.vayuda_turquoise_sliver,
      Items.vayuda_turquoise_fragment,
      Items.vayuda_turquoise_chunk,
      Items.vayuda_turquoise_gemstone,
    ],
  },
  traveler_gem: {
    normalizedName: "traveler_gem",
    itemIds: [
      Items.brilliant_diamond_sliver,
      Items.brilliant_diamond_fragment,
      Items.brilliant_diamond_chunk,
      Items.brilliant_diamond_gemstone,
    ],
  },
  dendro_gem: {
    normalizedName: "dendro_gem",
    itemIds: [
      Items.nagadus_emerald_sliver,
      Items.nagadus_emerald_fragment,
      Items.nagadus_emerald_chunk,
      Items.nagadus_emerald_gemstone,
    ],
  },
  scroll: {
    normalizedName: "scroll",
    itemIds: [Items.divining_scroll, Items.sealed_scroll, Items.forbidden_curse_scroll],
  },
  arrowhead: {
    normalizedName: "arrowhead",
    itemIds: [Items.firm_arrowhead, Items.sharp_arrowhead, Items.weathered_arrowhead],
  },
  treasure_hoarder_insignia: {
    normalizedName: "treasure_hoarder_insignia",
    itemIds: [Items.treasure_hoarder_insignia, Items.silver_raven_insignia, Items.golden_raven_insignia],
  },
  mask: { normalizedName: "mask", itemIds: [Items.damaged_mask, Items.stained_mask, Items.ominous_mask] },
  fatui_insignia: {
    normalizedName: "fatui_insignia",
    itemIds: [Items.recruits_insignia, Items.sergeants_insignia, Items.lieutenants_insignia],
  },
  nectar: {
    normalizedName: "nectar",
    itemIds: [Items.whopperflower_nectar, Items.shimmering_nectar, Items.energy_nectar],
  },
  slime: {
    normalizedName: "slime",
    itemIds: [Items.slime_condensate, Items.slime_secretions, Items.slime_concentrate],
  },
  ballad: {
    normalizedName: "ballad",
    itemIds: [Items.teachings_of_ballad, Items.guide_to_ballad, Items.philosophies_of_ballad],
  },
  freedom: {
    normalizedName: "freedom",
    itemIds: [Items.teachings_of_freedom, Items.guide_to_freedom, Items.philosophies_of_freedom],
  },
  gold: { normalizedName: "gold", itemIds: [Items.teachings_of_gold, Items.guide_to_gold, Items.philosophies_of_gold] },
  resistance: {
    normalizedName: "resistance",
    itemIds: [Items.teachings_of_resistance, Items.guide_to_resistance, Items.philosophies_of_resistance],
  },
  diligence: {
    normalizedName: "diligence",
    itemIds: [Items.teachings_of_diligence, Items.guide_to_diligence, Items.philosophies_of_diligence],
  },
  prosperity: {
    normalizedName: "prosperity",
    itemIds: [Items.teachings_of_prosperity, Items.guide_to_prosperity, Items.philosophies_of_prosperity],
  },

  // Weapon common
  chaos: { normalizedName: "chaos", itemIds: [Items.chaos_device, Items.chaos_circuit, Items.chaos_core] },
  horn: { normalizedName: "horn", itemIds: [Items.heavy_horn, Items.black_bronze_horn, Items.black_crystal_horn] },
  bone_shard: {
    normalizedName: "bone_shard",
    itemIds: [Items.fragile_bone_shard, Items.sturdy_bone_shard, Items.fossilized_bone_shard],
  },
  sacrificial_knife: {
    normalizedName: "sacrificial_knife",
    itemIds: [Items.hunters_sacrificial_knife, Items.agents_sacrificial_knife, Items.inspectors_sacrificial_knife],
  },
  mist_grass: {
    normalizedName: "mist_grass",
    itemIds: [Items.mist_grass_pollen, Items.mist_grass, Items.mist_grass_wick],
  },
  ley_line: {
    normalizedName: "ley_line",
    itemIds: [Items.dead_ley_line_branch, Items.dead_ley_line_leaves, Items.ley_line_sprouts],
  },

  // Weapon Ascension
  dandelion_gladiator: {
    normalizedName: "dandelion_gladiator",
    itemIds: [
      Items.fetters_of_the_dandelion_gladiator,
      Items.chains_of_the_dandelion_gladiator,
      Items.shackles_of_the_dandelion_gladiator,
      Items.dream_of_the_dandelion_gladiator,
    ],
  },
  decarabians: {
    normalizedName: "decarabians",
    itemIds: [
      Items.tile_of_decarabians_tower,
      Items.debris_of_decarabians_city,
      Items.fragment_of_decarabians_epic,
      Items.scattered_piece_of_decarabians_dream,
    ],
  },
  aerosiderite: {
    normalizedName: "aerosiderite",
    itemIds: [
      Items.grain_of_aerosiderite,
      Items.piece_of_aerosiderite,
      Items.bit_of_aerosiderite,
      Items.chunk_of_aerosiderite,
    ],
  },
  guyun: {
    normalizedName: "guyun",
    itemIds: [
      Items.luminous_sands_from_guyun,
      Items.lustrous_stone_from_guyun,
      Items.relic_from_guyun,
      Items.divine_body_from_guyun,
    ],
  },
  mist_elixir: {
    normalizedName: "mist_elixir",
    itemIds: [
      Items.mist_veiled_lead_elixir,
      Items.mist_veiled_mercury_elixir,
      Items.mist_veiled_gold_elixir,
      Items.mist_veiled_primo_elixir,
    ],
  },
  wolf_tooth: {
    normalizedName: "wolf_tooth",
    itemIds: [
      Items.boreal_wolfs_milk_tooth,
      Items.boreal_wolfs_cracked_tooth,
      Items.boreal_wolfs_broken_fang,
      Items.boreal_wolfs_nostalgia,
    ],
  },
  red_satin: {
    normalizedName: "red_satin",
    itemIds: [Items.faded_red_satin, Items.trimmed_red_silk, Items.rich_red_brocade],
  },
  fungal_spores: {
    normalizedName: "fungal_spores",
    itemIds: [Items.fungal_spores, Items.luminescent_pollen, Items.crystalline_cyst_dust],
  },
  praxis: {
    normalizedName: "praxis",
    itemIds: [Items.teachings_of_praxis, Items.guide_to_praxis, Items.philosophies_of_praxis],
  },
};
