type ItemsKey =
  | "crystalline_cyst_dust"
  | "luminescent_pollen"
  | "fungal_spores"
  | "nilotpala_lotus"
  | "rich_red_brocade"
  | "trimmed_red_silk"
  | "faded_red_satin"
  | "kalpalata_lotus"
  | "rukkhashava_mushrooms"
  | "nagadus_emerald_gemstone"
  | "nagadus_emerald_chunk"
  | "nagadus_emerald_fragment"
  | "nagadus_emerald_sliver"
  | "tears_of_the_calamitous_god"
  | "runic_fang"
  | "unknown"
  | "none"
  | "mudra_of_the_malefic_general"
  | "the_meaning_of_aeons"
  | "dragonheirs_false_fin"
  | "chaos_oculus"
  | "chaos_axis"
  | "chaos_gear"
  | "polarizing_prism"
  | "crystal_prism"
  | "dismal_prism"
  | "concealed_talon"
  | "concealed_unguis"
  | "concealed_claw"
  | "narukamis_affection"
  | "narukamis_joy"
  | "narukamis_wisdom"
  | "mask_of_the_one_horned"
  | "mask_of_the_tigers_bite"
  | "mask_of_the_wicked_lieutenant"
  | "jade_branch_of_a_distant_sea"
  | "jeweled_branch_of_a_distant_sea"
  | "coral_branch_of_a_distant_sea"
  | "onikabuto"
  | "riftborn_regalia"
  | "fluorescent_fungus"
  | "spectral_nucleus"
  | "spectral_heart"
  | "spectral_husk"
  | "sango_pearl"
  | "dew_of_repudiation"
  | "ashen_heart"
  | "molten_moment"
  | "hellfire_butterfly"
  | "amakumo_fruit"
  | "storm_beads"
  | "dendrobium"
  | "crystal_marrow"
  | "naku_weed"
  | "smoldering_pearl"
  | "teachings_of_light"
  | "guide_to_light"
  | "philosophies_of_light"
  | "teachings_of_transience"
  | "guide_to_transience"
  | "philosophies_of_transience"
  | "perpetual_heart"
  | "sakura_bloom"
  | "old_handguard"
  | "kageuchi_handguard"
  | "famed_handguard"
  | "teachings_of_elegance"
  | "guide_to_elegance"
  | "philosophies_of_elegance"
  | "sea_ganoderma"
  | "marionette_core"
  | "crown_of_insight"
  | "gilded_scale"
  | "enhancement_ore"
  | "fine_enhancement_ore"
  | "mystic_enhancement_ore"
  | "crystalline_bloom"
  | "wanderers_advice"
  | "adventurers_experience"
  | "heros_wit"
  | "agnidus_agate_sliver"
  | "agnidus_agate_fragment"
  | "agnidus_agate_chunk"
  | "agnidus_agate_gemstone"
  | "prithiva_topaz_sliver"
  | "prithiva_topaz_fragment"
  | "prithiva_topaz_chunk"
  | "prithiva_topaz_gemstone"
  | "shivada_jade_sliver"
  | "shivada_jade_fragment"
  | "shivada_jade_chunk"
  | "shivada_jade_gemstone"
  | "vajrada_amethyst_sliver"
  | "vajrada_amethyst_fragment"
  | "vajrada_amethyst_chunk"
  | "vajrada_amethyst_gemstone"
  | "varunada_lazurite_sliver"
  | "varunada_lazurite_fragment"
  | "varunada_lazurite_chunk"
  | "varunada_lazurite_gemstone"
  | "vayuda_turquoise_sliver"
  | "vayuda_turquoise_fragment"
  | "vayuda_turquoise_chunk"
  | "vayuda_turquoise_gemstone"
  | "brilliant_diamond_sliver"
  | "brilliant_diamond_fragment"
  | "brilliant_diamond_chunk"
  | "brilliant_diamond_gemstone"
  | "mora"
  | "primogem"
  | "cecilia"
  | "tusk_of_monoceros_caeli"
  | "basalt_pillar"
  | "divining_scroll"
  | "sealed_scroll"
  | "forbidden_curse_scroll"
  | "small_lamp_grass"
  | "dvalins_sigh"
  | "everflame_seed"
  | "firm_arrowhead"
  | "sharp_arrowhead"
  | "weathered_arrowhead"
  | "philanemo_mushroom"
  | "ring_of_boreas"
  | "cleansing_heart"
  | "noctilucous_jade"
  | "lightning_prism"
  | "treasure_hoarder_insignia"
  | "silver_raven_insignia"
  | "golden_raven_insignia"
  | "windwheel_aster"
  | "dvalins_plume"
  | "cor_lapis"
  | "hoarfrost_core"
  | "damaged_mask"
  | "stained_mask"
  | "ominous_mask"
  | "recruits_insignia"
  | "sergeants_insignia"
  | "lieutenants_insignia"
  | "calla_lily"
  | "shard_of_a_foul_legacy"
  | "spirit_locket_of_boreas"
  | "qingxin"
  | "shadow_of_the_warrior"
  | "whopperflower_nectar"
  | "shimmering_nectar"
  | "energy_nectar"
  | "silk_flower"
  | "juvenile_jade"
  | "dandelion_seed"
  | "hurricane_seed"
  | "valberry"
  | "dvalins_claw"
  | "slime_condensate"
  | "slime_secretions"
  | "slime_concentrate"
  | "glaze_lily"
  | "violetgrass"
  | "tail_of_boreas"
  | "wolfhook"
  | "starconch"
  | "jueyun_chili"
  | "bloodjade_branch"
  | "dragon_lords_crown"
  | "chaos_device"
  | "chaos_circuit"
  | "chaos_core"
  | "heavy_horn"
  | "black_bronze_horn"
  | "black_crystal_horn"
  | "fragile_bone_shard"
  | "sturdy_bone_shard"
  | "fossilized_bone_shard"
  | "hunters_sacrificial_knife"
  | "agents_sacrificial_knife"
  | "inspectors_sacrificial_knife"
  | "mist_grass_pollen"
  | "mist_grass"
  | "mist_grass_wick"
  | "dead_ley_line_branch"
  | "dead_ley_line_leaves"
  | "ley_line_sprouts"
  | "teachings_of_ballad"
  | "guide_to_ballad"
  | "philosophies_of_ballad"
  | "teachings_of_freedom"
  | "guide_to_freedom"
  | "philosophies_of_freedom"
  | "teachings_of_gold"
  | "guide_to_gold"
  | "philosophies_of_gold"
  | "teachings_of_resistance"
  | "guide_to_resistance"
  | "philosophies_of_resistance"
  | "teachings_of_diligence"
  | "guide_to_diligence"
  | "philosophies_of_diligence"
  | "teachings_of_prosperity"
  | "guide_to_prosperity"
  | "philosophies_of_prosperity"
  | "fetters_of_the_dandelion_gladiator"
  | "chains_of_the_dandelion_gladiator"
  | "shackles_of_the_dandelion_gladiator"
  | "dream_of_the_dandelion_gladiator"
  | "tile_of_decarabians_tower"
  | "debris_of_decarabians_city"
  | "fragment_of_decarabians_epic"
  | "scattered_piece_of_decarabians_dream"
  | "grain_of_aerosiderite"
  | "piece_of_aerosiderite"
  | "bit_of_aerosiderite"
  | "chunk_of_aerosiderite"
  | "luminous_sands_from_guyun"
  | "lustrous_stone_from_guyun"
  | "relic_from_guyun"
  | "divine_body_from_guyun"
  | "mist_veiled_lead_elixir"
  | "mist_veiled_mercury_elixir"
  | "mist_veiled_gold_elixir"
  | "mist_veiled_primo_elixir"
  | "boreal_wolfs_milk_tooth"
  | "boreal_wolfs_cracked_tooth"
  | "boreal_wolfs_broken_fang"
  | "boreal_wolfs_nostalgia";
export default ItemsKey;
