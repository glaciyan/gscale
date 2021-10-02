import { ItemGroup, Items } from "../lib/MyTypes";

export const items = {
    error: {
        name: "Error",
        rarity: 0,
    },

    fluorescent_fungus: { name: "Fluorescent Fungus", rarity: 1 },

    // 2.1
    spectral_nucleus: {
        name: "Spectral Nucleus",
        rarity: 3,
        group: ItemGroup.spectral,
    },
    spectral_heart: {
        name: "Spectral Heart",
        rarity: 2,
        group: ItemGroup.spectral,
    },
    spectral_husk: {
        name: "Spectral Husk",
        rarity: 1,
        group: ItemGroup.spectral,
    },
    sango_pearl: {
        name: "Sango Pearl",
        rarity: 1,
    },
    dew_of_repudiation: {
        name: "Dew of Repudiation",
        rarity: 4,
    },

    ashen_heart: {
        name: "Ashen Heart",
        rarity: 5,
    },
    molten_moment: {
        name: "Molten Moment",
        rarity: 5,
    },
    hellfire_butterfly: {
        name: "Hellfire Butterfly",
        rarity: 5,
    },

    amakumo_fruit: {
        name: "Amakumo Fruit",
        rarity: 1,
    },
    storm_beads: {
        name: "Storm Beads",
        rarity: 4,
    },

    // 2.0
    dendrobium: {
        name: "Dendrobium",
        rarity: 1,
    },
    crystal_marrow: {
        name: "Crystal Marrow",
        rarity: 1,
    },
    naku_weed: {
        name: "Naku Weed",
        rarity: 1,
    },
    smoldering_pearl: {
        name: "Smoldering Pearl",
        rarity: 4,
    },
    teachings_of_light: {
        name: "Teachings of Light",
        rarity: 2,
        group: ItemGroup.light,
    },
    guide_to_light: {
        name: "Guide to Light",
        rarity: 3,
        group: ItemGroup.light,
    },
    philosophies_of_light: {
        name: "Philosophies of Light",
        rarity: 4,
        group: ItemGroup.light,
    },

    teachings_of_transience: {
        name: "Teachings of Transience",
        rarity: 2,
        group: ItemGroup.transience,
    },
    guide_to_transience: {
        name: "Guide to Transience",
        rarity: 3,
        group: ItemGroup.transience,
    },
    philosophies_of_transience: {
        name: "Philosophies of Transience",
        rarity: 4,
        group: ItemGroup.transience,
    },

    perpetual_heart: {
        name: "Perpetual Heart",
        rarity: 4,
    },
    sakura_bloom: {
        name: "Sakura Bloom",
        rarity: 1,
    },

    old_handguard: {
        name: "Old Handguard",
        rarity: 1,
        group: ItemGroup.handguard,
    },
    kageuchi_handguard: {
        name: "Kageuchi Handguard",
        rarity: 2,
        group: ItemGroup.handguard,
    },
    famed_handguard: {
        name: "Famed Handguard",
        rarity: 3,
        group: ItemGroup.handguard,
    },

    teachings_of_elegance: {
        name: "Teachings of Elegance",
        rarity: 2,
        group: ItemGroup.elegance,
    },
    guide_to_elegance: {
        name: "Guide to Elegance",
        rarity: 3,
        group: ItemGroup.elegance,
    },
    philosophies_of_elegance: {
        name: "Philosophies of Elegance",
        rarity: 4,
        group: ItemGroup.elegance,
    },

    sea_ganoderma: {
        name: "Sea Ganoderma",
        rarity: 1,
    },
    marionette_core: {
        name: "Marionette Core",
        rarity: 4,
    },
    crown_of_insight: {
        name: "Crown of Insight",
        rarity: 5,
    },
    gilded_scale: {
        name: "Gilded Scale",
        rarity: 5,
    },
    enhancement_ore: {
        name: "Enhancement Ore",
        rarity: 1,
    },
    fine_enhancement_ore: {
        name: "Fine Enhancement Ore",
        rarity: 2,
    },
    mystic_enhancement_ore: {
        name: "Mystic Enhancement Ore",
        rarity: 3,
    },
    crystalline_bloom: {
        name: "Crystalline Bloom",
        rarity: 4,
    },
    wanderers_advice: {
        name: "Wanderer's Advice",
        rarity: 2,
        xp: 1000,
    },
    adventurers_experience: {
        name: "Adventurer's Experience",
        rarity: 3,
        xp: 5000,
    },
    heros_wit: {
        name: "Hero's Wit",
        rarity: 4,
        xp: 20000,
    },
    agnidus_agate_sliver: {
        name: "Agnidus Agate Sliver",
        rarity: 2,
        group: ItemGroup.pyro_gem,
    },
    agnidus_agate_fragment: {
        name: "Agnidus Agate Fragment",
        rarity: 3,
        group: ItemGroup.pyro_gem,
    },
    agnidus_agate_chunk: {
        name: "Agnidus Agate Chunk",
        rarity: 4,
        group: ItemGroup.pyro_gem,
    },
    agnidus_agate_gemstone: {
        name: "Agnidus Agate Gemstone",
        rarity: 5,
        group: ItemGroup.pyro_gem,
    },
    prithiva_topaz_sliver: {
        name: "Prithiva Topaz Sliver",
        rarity: 2,
        group: ItemGroup.geo_gem,
    },
    prithiva_topaz_fragment: {
        name: "Prithiva Topaz Fragment",
        rarity: 3,
        group: ItemGroup.geo_gem,
    },
    prithiva_topaz_chunk: {
        name: "Prithiva Topaz Chunk",
        rarity: 4,
        group: ItemGroup.geo_gem,
    },
    prithiva_topaz_gemstone: {
        name: "Prithiva Topaz Gemstone",
        rarity: 5,
        group: ItemGroup.geo_gem,
    },
    shivada_jade_sliver: {
        name: "Shivada Jade Sliver",
        rarity: 2,
        group: ItemGroup.cryo_gem,
    },
    shivada_jade_fragment: {
        name: "Shivada Jade Fragment",
        rarity: 3,
        group: ItemGroup.cryo_gem,
    },
    shivada_jade_chunk: {
        name: "Shivada Jade Chunk",
        rarity: 4,
        group: ItemGroup.cryo_gem,
    },
    shivada_jade_gemstone: {
        name: "Shivada Jade Gemstone",
        rarity: 5,
        group: ItemGroup.cryo_gem,
    },
    vajrada_amethyst_sliver: {
        name: "Vajrada Amethyst Sliver",
        rarity: 2,
        group: ItemGroup.electro_gem,
    },
    vajrada_amethyst_fragment: {
        name: "Vajrada Amethyst Fragment",
        rarity: 3,
        group: ItemGroup.electro_gem,
    },
    vajrada_amethyst_chunk: {
        name: "Vajrada Amethyst Chunk",
        rarity: 4,
        group: ItemGroup.electro_gem,
    },
    vajrada_amethyst_gemstone: {
        name: "Vajrada Amethyst Gemstone",
        rarity: 5,
        group: ItemGroup.electro_gem,
    },
    varunada_lazurite_sliver: {
        name: "Varunada Lazurite Sliver",
        rarity: 2,
        group: ItemGroup.hydro_gem,
    },
    varunada_lazurite_fragment: {
        name: "Varunada Lazurite Fragment",
        rarity: 3,
        group: ItemGroup.hydro_gem,
    },
    varunada_lazurite_chunk: {
        name: "Varunada Lazurite Chunk",
        rarity: 4,
        group: ItemGroup.hydro_gem,
    },
    varunada_lazurite_gemstone: {
        name: "Varunada Lazurite Gemstone",
        rarity: 5,
        group: ItemGroup.hydro_gem,
    },
    vayuda_turquoise_sliver: {
        name: "Vayuda Turquoise Sliver",
        rarity: 2,
        group: ItemGroup.anemo_gem,
    },
    vayuda_turquoise_fragment: {
        name: "Vayuda Turquoise Fragment",
        rarity: 3,
        group: ItemGroup.anemo_gem,
    },
    vayuda_turquoise_chunk: {
        name: "Vayuda Turquoise Chunk",
        rarity: 4,
        group: ItemGroup.anemo_gem,
    },
    vayuda_turquoise_gemstone: {
        name: "Vayuda Turquoise Gemstone",
        rarity: 5,
        group: ItemGroup.anemo_gem,
    },
    brilliant_diamond_sliver: {
        name: "Brilliant Diamond Sliver",
        rarity: 2,
        group: ItemGroup.traveler_gem,
    },
    brilliant_diamond_fragment: {
        name: "Brilliant Diamond Fragment",
        rarity: 3,
        group: ItemGroup.traveler_gem,
    },
    brilliant_diamond_chunk: {
        name: "Brilliant Diamond Chunk",
        rarity: 4,
        group: ItemGroup.traveler_gem,
    },
    brilliant_diamond_gemstone: {
        name: "Brilliant Diamond Gemstone",
        rarity: 5,
        group: ItemGroup.traveler_gem,
    },
    mora: {
        name: "Mora",
        rarity: 1,
    },
    primogem: {
        name: "Primogem",
        rarity: 5,
        alias: "prismo",
    },
    cecilia: {
        name: "Cecilia",
        rarity: 1,
    },
    tusk_of_monoceros_caeli: {
        name: "Tusk of Monoceros Caeli",
        rarity: 5,
    },
    basalt_pillar: {
        name: "Basalt Pillar",
        rarity: 4,
    },
    divining_scroll: {
        name: "Divining Scroll",
        rarity: 1,
        group: ItemGroup.scroll,
    },
    sealed_scroll: {
        name: "Sealed Scroll",
        rarity: 2,
        group: ItemGroup.scroll,
    },
    forbidden_curse_scroll: {
        name: "Forbidden Curse Scroll",
        rarity: 3,
        group: ItemGroup.scroll,
    },
    small_lamp_grass: {
        name: "Small Lamp Grass",
        rarity: 1,
    },
    dvalins_sigh: {
        name: "Dvalin's Sigh",
        rarity: 5,
    },
    everflame_seed: {
        name: "Everflame Seed",
        rarity: 4,
        alias: "Pyro Flower",
    },
    firm_arrowhead: {
        name: "Firm Arrowhead",
        rarity: 1,
        group: ItemGroup.arrowhead,
    },
    sharp_arrowhead: {
        name: "Sharp Arrowhead",
        rarity: 2,
        group: ItemGroup.arrowhead,
    },
    weathered_arrowhead: {
        name: "Weathered Arrowhead",
        rarity: 3,
        group: ItemGroup.arrowhead,
    },
    philanemo_mushroom: {
        name: "Philanemo Mushroom",
        rarity: 1,
    },
    ring_of_boreas: {
        name: "Ring of Boreas",
        rarity: 5,
    },
    cleansing_heart: {
        name: "Cleansing Heart",
        rarity: 4,
    },
    noctilucous_jade: {
        name: "Noctilucous Jade",
        rarity: 1,
    },
    lightning_prism: {
        name: "Lightning Prism",
        rarity: 4,
    },
    treasure_hoarder_insignia: {
        name: "Treasure Hoarder Insignia",
        rarity: 1,
        group: ItemGroup.treasure_hoarder_insignia,
    },
    silver_raven_insignia: {
        name: "Silver Raven Insignia",
        rarity: 2,
        group: ItemGroup.treasure_hoarder_insignia,
    },
    golden_raven_insignia: {
        name: "Golden Raven Insignia",
        rarity: 3,
        group: ItemGroup.treasure_hoarder_insignia,
    },
    windwheel_aster: {
        name: "Windwheel Aster",
        rarity: 1,
    },
    dvalins_plume: {
        name: "Dvalin's Plume",
        rarity: 5,
    },
    cor_lapis: {
        name: "Cor Lapis",
        rarity: 1,
    },
    hoarfrost_core: {
        name: "Hoarfrost Core",
        rarity: 4,
        alias: "Ice Flower",
    },
    damaged_mask: {
        name: "Damaged Mask",
        rarity: 1,
        group: ItemGroup.mask,
    },
    stained_mask: {
        name: "Stained Mask",
        rarity: 2,
        group: ItemGroup.mask,
    },
    ominous_mask: {
        name: "Ominous Mask",
        rarity: 3,
        group: ItemGroup.mask,
    },
    recruits_insignia: {
        name: "Recruit's Insignia",
        rarity: 1,
        group: ItemGroup.fatui_insignia,
    },
    sergeants_insignia: {
        name: "Sergeant's Insignia",
        rarity: 2,
        group: ItemGroup.fatui_insignia,
    },
    lieutenants_insignia: {
        name: "Lieutenant's Insignia",
        rarity: 3,
        group: ItemGroup.fatui_insignia,
    },
    calla_lily: {
        name: "Calla Lily",
        rarity: 1,
    },
    shard_of_a_foul_legacy: {
        name: "Shard of a Foul Legacy",
        rarity: 5,
    },
    spirit_locket_of_boreas: {
        name: "Spirit Locket of Boreas",
        rarity: 5,
    },
    qingxin: {
        name: "Qingxin",
        rarity: 1,
    },
    shadow_of_the_warrior: {
        name: "Shadow of the Warrior",
        rarity: 5,
    },
    whopperflower_nectar: {
        name: "Whopperflower Nectar",
        rarity: 1,
        group: ItemGroup.nectar,
    },
    shimmering_nectar: {
        name: "Shimmering Nectar",
        rarity: 2,
        group: ItemGroup.nectar,
    },
    energy_nectar: {
        name: "Energy Nectar",
        rarity: 3,
        group: ItemGroup.nectar,
    },
    silk_flower: {
        name: "Silk Flower",
        rarity: 1,
    },
    juvenile_jade: {
        name: "Juvenile Jade",
        rarity: 4,
    },
    dandelion_seed: {
        name: "Dandelion Seed",
        rarity: 1,
    },
    hurricane_seed: {
        name: "Hurricane Seed",
        rarity: 4,
    },
    valberry: {
        name: "Valberry",
        rarity: 1,
    },
    dvalins_claw: {
        name: "Dvalin's Claw",
        rarity: 5,
    },
    slime_condensate: {
        name: "Slime Condensate",
        rarity: 1,
        group: ItemGroup.slime,
    },
    slime_secretions: {
        name: "Slime Secretions",
        rarity: 2,
        group: ItemGroup.slime,
    },
    slime_concentrate: {
        name: "Slime Concentrate",
        rarity: 3,
        group: ItemGroup.slime,
    },
    glaze_lily: {
        name: "Glaze Lily",
        rarity: 1,
    },
    violetgrass: {
        name: "Violetgrass",
        rarity: 1,
    },
    tail_of_boreas: {
        name: "Tail of Boreas",
        rarity: 5,
    },
    wolfhook: {
        name: "Wolfhook",
        rarity: 1,
    },
    starconch: {
        name: "Starconch",
        rarity: 1,
    },
    jueyun_chili: {
        name: "Jueyun Chili",
        rarity: 1,
    },
    bloodjade_branch: {
        name: "Bloodjade Branch",
        rarity: 5,
    },
    dragon_lords_crown: {
        name: "Dragon Lord's Crown",
        rarity: 5,
    },
    chaos_device: {
        name: "Chaos Device",
        rarity: 1,
        group: ItemGroup.chaos,
    },
    chaos_circuit: {
        name: "Chaos Circuit",
        rarity: 2,
        group: ItemGroup.chaos,
    },
    chaos_core: {
        name: "Chaos Core",
        rarity: 3,
        group: ItemGroup.chaos,
    },
    heavy_horn: {
        name: "Heavy Horn",
        rarity: 1,
        group: ItemGroup.horn,
    },
    black_bronze_horn: {
        name: "Black Bronze Horn",
        rarity: 2,
        group: ItemGroup.horn,
    },
    black_crystal_horn: {
        name: "Black Crystal Horn",
        rarity: 3,
        group: ItemGroup.horn,
    },
    fragile_bone_shard: {
        name: "Fragile Bone Shard",
        rarity: 1,
        group: ItemGroup.bone_shard,
    },
    sturdy_bone_shard: {
        name: "Sturdy Bone Shard",
        rarity: 2,
        group: ItemGroup.bone_shard,
    },
    fossilized_bone_shard: {
        name: "Fossilized Bone Shard",
        rarity: 3,
        group: ItemGroup.bone_shard,
    },
    hunters_sacrificial_knife: {
        name: "Hunter's Sacrificial Knife",
        rarity: 1,
        group: ItemGroup.sacrificial_knife,
    },
    agents_sacrificial_knife: {
        name: "Agent's Sacrificial Knife",
        rarity: 2,
        group: ItemGroup.sacrificial_knife,
    },
    inspectors_sacrificial_knife: {
        name: "Inspector's Sacrificial Knife",
        rarity: 3,
        group: ItemGroup.sacrificial_knife,
    },
    mist_grass_pollen: {
        name: "Mist Grass Pollen",
        rarity: 1,
        group: ItemGroup.mist_grass,
    },
    mist_grass: {
        name: "Mist Grass",
        rarity: 2,
        group: ItemGroup.mist_grass,
    },
    mist_grass_wick: {
        name: "Mist Grass Wick",
        rarity: 3,
        group: ItemGroup.mist_grass,
    },
    dead_ley_line_branch: {
        name: "Dead Ley Line Branch",
        rarity: 1,
        group: ItemGroup.ley_line,
    },
    dead_ley_line_leaves: {
        name: "Dead Ley Line Leaves",
        rarity: 2,
        group: ItemGroup.ley_line,
    },
    ley_line_sprouts: {
        name: "Ley Line Sprouts",
        rarity: 3,
        group: ItemGroup.ley_line,
    },
    teachings_of_ballad: {
        name: "Teachings of Ballad",
        rarity: 2,
        group: ItemGroup.ballad,
    },
    guide_to_ballad: {
        name: "Guide to Ballad",
        rarity: 3,
        group: ItemGroup.ballad,
    },
    philosophies_of_ballad: {
        name: "Philosophies of Ballad",
        rarity: 4,
        group: ItemGroup.ballad,
    },
    teachings_of_freedom: {
        name: "Teachings of Freedom",
        rarity: 2,
        group: ItemGroup.freedom,
    },
    guide_to_freedom: {
        name: "Guide to Freedom",
        rarity: 3,
        group: ItemGroup.freedom,
    },
    philosophies_of_freedom: {
        name: "Philosophies of Freedom",
        rarity: 4,
        group: ItemGroup.freedom,
    },
    teachings_of_gold: {
        name: "Teachings of Gold",
        rarity: 2,
        group: ItemGroup.gold,
    },
    guide_to_gold: {
        name: "Guide to Gold",
        rarity: 3,
        group: ItemGroup.gold,
    },
    philosophies_of_gold: {
        name: "Philosophies of Gold",
        rarity: 4,
        group: ItemGroup.gold,
    },
    teachings_of_resistance: {
        name: "Teachings of Resistance",
        rarity: 2,
        group: ItemGroup.resistance,
    },
    guide_to_resistance: {
        name: "Guide to Resistance",
        rarity: 3,
        group: ItemGroup.resistance,
    },
    philosophies_of_resistance: {
        name: "Philosophies of Resistance",
        rarity: 4,
        group: ItemGroup.resistance,
    },
    teachings_of_diligence: {
        name: "Teachings of Diligence",
        rarity: 2,
        group: ItemGroup.diligence,
    },
    guide_to_diligence: {
        name: "Guide to Diligence",
        rarity: 3,
        group: ItemGroup.diligence,
    },
    philosophies_of_diligence: {
        name: "Philosophies of Diligence",
        rarity: 4,
        group: ItemGroup.diligence,
    },
    teachings_of_prosperity: {
        name: "Teachings of Prosperity",
        rarity: 2,
        group: ItemGroup.prosperity,
    },
    guide_to_prosperity: {
        name: "Guide to Prosperity",
        rarity: 3,
        group: ItemGroup.prosperity,
    },
    philosophies_of_prosperity: {
        name: "Philosophies of Prosperity",
        rarity: 4,
        group: ItemGroup.prosperity,
    },
    fetters_of_the_dandelion_gladiator: {
        name: "Fetters of the Dandelion Gladiator",
        rarity: 2,
        group: ItemGroup.dandelion_gladiator,
    },
    chains_of_the_dandelion_gladiator: {
        name: "Chains of the Dandelion Gladiator",
        rarity: 3,
        group: ItemGroup.dandelion_gladiator,
    },
    shackles_of_the_dandelion_gladiator: {
        name: "Shackles of the Dandelion Gladiator",
        rarity: 4,
        group: ItemGroup.dandelion_gladiator,
    },
    dream_of_the_dandelion_gladiator: {
        name: "Dream of the Dandelion Gladiator",
        rarity: 5,
        group: ItemGroup.dandelion_gladiator,
    },
    tile_of_decarabians_tower: {
        name: "Tile of Decarabian's Tower",
        rarity: 2,
        group: ItemGroup.decarabians,
    },
    debris_of_decarabians_city: {
        name: "Debris of Decarabian's City",
        rarity: 3,
        group: ItemGroup.decarabians,
    },
    fragment_of_decarabians_epic: {
        name: "Fragment of Decarabian's Epic",
        rarity: 4,
        group: ItemGroup.decarabians,
    },
    scattered_piece_of_decarabians_dream: {
        name: "Scattered Piece of Decarabian's Dream",
        rarity: 5,
        group: ItemGroup.decarabians,
    },
    grain_of_aerosiderite: {
        name: "Grain of Aerosiderite",
        rarity: 2,
        group: ItemGroup.aerosiderite,
    },
    piece_of_aerosiderite: {
        name: "Piece of Aerosiderite",
        rarity: 3,
        group: ItemGroup.aerosiderite,
    },
    bit_of_aerosiderite: {
        name: "Bit of Aerosiderite",
        rarity: 4,
        group: ItemGroup.aerosiderite,
    },
    chunk_of_aerosiderite: {
        name: "Chunk of Aerosiderite",
        rarity: 5,
        group: ItemGroup.aerosiderite,
    },
    luminous_sands_from_guyun: {
        name: "Luminous Sands from Guyun",
        rarity: 2,
        group: ItemGroup.guyun,
    },
    lustrous_stone_from_guyun: {
        name: "Lustrous Stone from Guyun",
        rarity: 3,
        group: ItemGroup.guyun,
    },
    relic_from_guyun: {
        name: "Relic from Guyun",
        rarity: 4,
        group: ItemGroup.guyun,
    },
    divine_body_from_guyun: {
        name: "Divine Body from Guyun",
        rarity: 5,
        group: ItemGroup.guyun,
    },
    mist_veiled_lead_elixir: {
        name: "Mist Veiled Lead Elixir",
        rarity: 2,
        group: ItemGroup.mist_elixir,
    },
    mist_veiled_mercury_elixir: {
        name: "Mist Veiled Mercury Elixir",
        rarity: 3,
        group: ItemGroup.mist_elixir,
    },
    mist_veiled_gold_elixir: {
        name: "Mist Veiled Gold Elixir",
        rarity: 4,
        group: ItemGroup.mist_elixir,
    },
    mist_veiled_primo_elixir: {
        name: "Mist Veiled Primo Elixir",
        rarity: 5,
        group: ItemGroup.mist_elixir,
    },
    boreal_wolfs_milk_tooth: {
        name: "Boreal Wolf's Milk Tooth",
        rarity: 2,
        group: ItemGroup.wolf_tooth,
    },
    boreal_wolfs_cracked_tooth: {
        name: "Boreal Wolf's Cracked Tooth",
        rarity: 3,
        group: ItemGroup.wolf_tooth,
    },
    boreal_wolfs_broken_fang: {
        name: "Boreal Wolf's Broken Fang",
        rarity: 4,
        group: ItemGroup.wolf_tooth,
    },
    boreal_wolfs_nostalgia: {
        name: "Boreal Wolf's Nostalgia",
        rarity: 5,
        group: ItemGroup.wolf_tooth,
    },
};

export const itemsArray = items as Items;
