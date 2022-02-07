import { ICharacter } from "./contracts/ICharacter";
import { Elements } from "./Elements";
import { ItemGroups } from "./ItemGroups";
import { Items } from "./Items";
import CharactersKey from "./keys/CharactersKey";
import { WeaponTypes } from "./WeaponTypes";

export const Characters: { [key in CharactersKey]: ICharacter } = {
  yae_miko: {
    speculated: true,
    name: "Yae Miko",
    normalizedName: "yae_miko",
    element: Elements.electro,
    weaponType: WeaponTypes.catalyst,
    rarity: 5,
    sub: "No info",
    constellation: "No info",
    description: "No Info",
    local: Items.sea_ganoderma,
    commonGroup: ItemGroups.handguard,
    boss: Items.dragonheirs_false_fin,
    gemGroup: ItemGroups.electro_gem,
    bookGroup: ItemGroups.light,
    weekly: Items.unknown,
  },
  shenhe: {
    name: "Shenhe",
    normalizedName: "shenhe",
    element: Elements.cryo,
    weaponType: WeaponTypes.polearm,
    rarity: 5,
    sub: "ATK%",
    constellation: "Crista Doloris",
    description:
      "An adepti disciple with a most unusual air about her. Having spent much time cultivating in isolation in Liyue's mountains, she has become every bit as cool and distant as the adepti themselves.",
    local: Items.qingxin,
    commonGroup: ItemGroups.nectar,
    boss: Items.dragonheirs_false_fin,
    gemGroup: ItemGroups.cryo_gem,
    bookGroup: ItemGroups.prosperity,
    weekly: Items.hellfire_butterfly,
  },
  yun_jin: {
    name: "Yun Jin",
    normalizedName: "yun_jin",
    element: Elements.geo,
    weaponType: WeaponTypes.polearm,
    rarity: 4,
    sub: "Energy Recharge",
    constellation: "Opera Grandis",
    description:
      "A renowned Liyue opera singer who is skilled in both playwriting and singing. Her style is one-of-a-kind, exquisite and delicate, much like the person herself.",
    local: Items.glaze_lily,
    commonGroup: ItemGroups.mask,
    boss: Items.riftborn_regalia,
    gemGroup: ItemGroups.geo_gem,
    bookGroup: ItemGroups.diligence,
    weekly: Items.ashen_heart,
  },
  itto: {
    name: "Itto",
    normalizedName: "itto",
    altName: "Arataki Itto",
    element: Elements.geo,
    weaponType: WeaponTypes.claymore,
    rarity: 5,
    sub: "CRIT Rate",
    constellation: "Taurus Iracundus",
    description:
      "Fast as the wind and mighty as thunder, he is an intrepid man with Oni blood running through his veins.",
    local: Items.onikabuto,
    commonGroup: ItemGroups.slime,
    boss: Items.riftborn_regalia,
    gemGroup: ItemGroups.geo_gem,
    bookGroup: ItemGroups.elegance,
    weekly: Items.ashen_heart,
  },
  gorou: {
    name: "Gorou",
    normalizedName: "gorou",
    element: Elements.geo,
    weaponType: WeaponTypes.bow,
    rarity: 4,
    sub: "Geo DMG Bonus",
    constellation: "Canis Bellatoris",
    description: "The great general of Watatsumi Island's forces. He is deeply trusted by his subordinates.",
    local: Items.sango_pearl,
    commonGroup: ItemGroups.spectral,
    boss: Items.perpetual_heart,
    gemGroup: ItemGroups.geo_gem,
    bookGroup: ItemGroups.light,
    weekly: Items.molten_moment,
  },
  thoma: {
    name: "Thoma",
    normalizedName: "thoma",
    element: Elements.pyro,
    weaponType: WeaponTypes.polearm,
    rarity: 4,
    sub: "ATK",
    constellation: "Rubeum Scutum",
    description: 'The Kamisato Clan\'s housekeeper. A well-known "fixer" in Inazuma.',
    local: Items.fluorescent_fungus,
    commonGroup: ItemGroups.treasure_hoarder_insignia,
    boss: Items.smoldering_pearl,
    gemGroup: ItemGroups.pyro_gem,
    bookGroup: ItemGroups.transience,
    weekly: Items.hellfire_butterfly,
  },
  kokomi: {
    name: "Kokomi",
    normalizedName: "kokomi",
    altName: "Sangonomiya Kokomi",
    element: Elements.hydro,
    weaponType: WeaponTypes.catalyst,
    rarity: 5,
    sub: "Hydro DMG%",
    constellation: "Dracaena Somnolenta",
    description:
      "The Divine Priestess of Watatsumi Island. All of the island's affairs are at this young lady's fingertips.",
    local: Items.sango_pearl,
    commonGroup: ItemGroups.spectral,
    boss: Items.dew_of_repudiation,
    gemGroup: ItemGroups.hydro_gem,
    bookGroup: ItemGroups.transience,
    weekly: Items.hellfire_butterfly,
  },
  aloy: {
    name: "Aloy",
    normalizedName: "aloy",
    element: Elements.cryo,
    weaponType: WeaponTypes.bow,
    rarity: 5,
    sub: "Cryo DMG Bonus",
    constellation: "Nora Fortis",
    description: "An agile hunter from the Nora tribe. With bow in hand, she's always ready to protect the innocent.",
    local: Items.crystal_marrow,
    commonGroup: ItemGroups.spectral,
    boss: Items.crystalline_bloom,
    gemGroup: ItemGroups.cryo_gem,
    bookGroup: ItemGroups.freedom,
    weekly: Items.molten_moment,
  },
  sara: {
    name: "Sara",
    normalizedName: "sara",
    altName: "Kujou Sara",
    element: Elements.electro,
    weaponType: WeaponTypes.bow,
    rarity: 4,
    sub: "ATK",
    constellation: "Flabellum",
    description: "A general of the Tenryou Commission. Bold, decisive, and skilled in battle.",
    local: Items.dendrobium,
    commonGroup: ItemGroups.mask,
    boss: Items.storm_beads,
    gemGroup: ItemGroups.electro_gem,
    bookGroup: ItemGroups.elegance,
    weekly: Items.ashen_heart,
  },
  raiden: {
    name: "Raiden",
    normalizedName: "raiden",
    altName: "Raiden Shogun",
    element: Elements.electro,
    weaponType: WeaponTypes.polearm,
    rarity: 5,
    sub: "Energy Recharge",
    constellation: "Imperatrix Umbrosa",
    description:
      "Her Excellency, the Almighty Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.",
    local: Items.amakumo_fruit,
    commonGroup: ItemGroups.handguard,
    boss: Items.storm_beads,
    gemGroup: ItemGroups.electro_gem,
    bookGroup: ItemGroups.light,
    weekly: Items.molten_moment,
  },
  yoimiya: {
    name: "Yoimiya",
    normalizedName: "yoimiya",
    altName: "Naganohara Yoimiya",
    element: Elements.pyro,
    weaponType: WeaponTypes.bow,
    rarity: 5,
    sub: "CRIT Rate",
    constellation: "Carassius Auratus",
    description:
      'Owner of Naganohara Fireworks. Known as "Queen of the Summer Festival," she excels in her craft of creating fireworks that symbolize people\'s hopes and dreams.',
    local: Items.naku_weed,
    commonGroup: ItemGroups.scroll,
    boss: Items.smoldering_pearl,
    gemGroup: ItemGroups.pyro_gem,
    bookGroup: ItemGroups.transience,
    weekly: Items.dragon_lords_crown,
  },
  sayu: {
    name: "Sayu",
    normalizedName: "sayu",
    element: Elements.anemo,
    weaponType: WeaponTypes.claymore,
    rarity: 4,
    sub: "Elemental Mastery",
    constellation: "Nyctereutes Minor",
    description: "A pint-sized ninja attached to the Shuumatsuban, who always seems sleep-deprived.",
    local: Items.crystal_marrow,
    commonGroup: ItemGroups.nectar,
    boss: Items.marionette_core,
    gemGroup: ItemGroups.anemo_gem,
    bookGroup: ItemGroups.light,
    weekly: Items.gilded_scale,
  },
  ayaka: {
    name: "Ayaka",
    normalizedName: "ayaka",
    altName: "Kamisato Ayaka",
    element: Elements.cryo,
    weaponType: WeaponTypes.sword,
    rarity: 5,
    sub: "CRIT DMG",
    constellation: "Grus Nivis",
    description:
      "Daughter of the Yashiro Commission's Kamisato Clan. Dignified and elegant, as well as wise and strong.",
    local: Items.sakura_bloom,
    commonGroup: ItemGroups.handguard,
    boss: Items.perpetual_heart,
    gemGroup: ItemGroups.cryo_gem,
    bookGroup: ItemGroups.elegance,
    weekly: Items.bloodjade_branch,
  },
  kazuha: {
    name: "Kazuha",
    normalizedName: "kazuha",
    altName: "Kaedehara Kazuha",
    element: Elements.anemo,
    weaponType: WeaponTypes.sword,
    rarity: 5,
    sub: "Elemental Mastery",
    constellation: "Acer Palmatum",
    description:
      "A wandering samurai from Inazuma who is currently with Liyue's Crux Fleet. A gentle and carefree soul whose heart hides a great many burdens from the past. It's hard to say if weathering life's storms has eroded any sharp edges he once had or his reserved nature keeps them hidden from view. The first time most people meet Kaedehara Kazuha, they presume he is just another traineee crew member aboard The Crux.",
    local: Items.sea_ganoderma,
    commonGroup: ItemGroups.treasure_hoarder_insignia,
    boss: Items.marionette_core,
    gemGroup: ItemGroups.anemo_gem,
    bookGroup: ItemGroups.diligence,
    weekly: Items.gilded_scale,
  },
  eula: {
    name: "Eula",
    normalizedName: "eula",
    element: Elements.cryo,
    weaponType: WeaponTypes.claymore,
    rarity: 5,
    sub: "CRIT DMG",
    constellation: "Aphros Delos",
    description:
      "The Spindrift Knight, a scion of the old aristocracy, and the Captain of the Knights of Favonius Reconnaissance Company. The reason for which a descendant of the ancient nobles might join the Knights remains a great mystery in Mondstadt to this very day.",
    local: Items.dandelion_seed,
    commonGroup: ItemGroups.mask,
    boss: Items.crystalline_bloom,
    gemGroup: ItemGroups.cryo_gem,
    bookGroup: ItemGroups.resistance,
    weekly: Items.dragon_lords_crown,
  },
  yanfei: {
    name: "Yanfei",
    normalizedName: "yanfei",
    element: Elements.pyro,
    weaponType: WeaponTypes.catalyst,
    rarity: 4,
    sub: "Pyro DMG Bonus",
    constellation: "Bestia Iustitia",
    description:
      "A well-known legal adviser active in Liyue Harbor. A brilliant young lady in whose veins runs the blood of an illuminated beast.",
    local: Items.noctilucous_jade,
    commonGroup: ItemGroups.treasure_hoarder_insignia,
    boss: Items.juvenile_jade,
    gemGroup: ItemGroups.pyro_gem,
    bookGroup: ItemGroups.gold,
    weekly: Items.bloodjade_branch,
  },
  rosaria: {
    name: "Rosaria",
    normalizedName: "rosaria",
    element: Elements.cryo,
    weaponType: WeaponTypes.polearm,
    rarity: 4,
    sub: "ATK",
    constellation: "Spinea Corona",
    description:
      "A sister of the church, though you wouldn't know it if it weren't for her attire. Known for her sharp, cold words and manner, she often works alone.",
    local: Items.valberry,
    commonGroup: ItemGroups.fatui_insignia,
    boss: Items.hoarfrost_core,
    gemGroup: ItemGroups.cryo_gem,
    bookGroup: ItemGroups.ballad,
    weekly: Items.shadow_of_the_warrior,
  },
  hu_tao: {
    name: "Hu Tao",
    normalizedName: "hu_tao",
    element: Elements.pyro,
    weaponType: WeaponTypes.polearm,
    rarity: 5,
    sub: "CRIT DMG",
    constellation: "Papilio Charontis",
    description: "The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.",
    local: Items.silk_flower,
    commonGroup: ItemGroups.nectar,
    boss: Items.juvenile_jade,
    gemGroup: ItemGroups.pyro_gem,
    bookGroup: ItemGroups.diligence,
    weekly: Items.shard_of_a_foul_legacy,
  },
  xiao: {
    name: "Xiao",
    normalizedName: "xiao",
    element: Elements.anemo,
    weaponType: WeaponTypes.polearm,
    rarity: 5,
    sub: "CRIT Rate",
    constellation: "Alatus Nemeseos",
    description:
      'A yaksha adeptus who defends Liyue. Also heralded as the "Conqueror of Demons" and "Vigilant Yaksha."',
    local: Items.qingxin,
    commonGroup: ItemGroups.slime,
    boss: Items.juvenile_jade,
    gemGroup: ItemGroups.anemo_gem,
    bookGroup: ItemGroups.prosperity,
    weekly: Items.shadow_of_the_warrior,
  },
  ganyu: {
    name: "Ganyu",
    normalizedName: "ganyu",
    element: Elements.cryo,
    weaponType: WeaponTypes.bow,
    rarity: 5,
    sub: "CRIT DMG",
    constellation: "Sinae Unicornis",
    description:
      "The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.",
    local: Items.qingxin,
    commonGroup: ItemGroups.nectar,
    boss: Items.hoarfrost_core,
    gemGroup: ItemGroups.cryo_gem,
    bookGroup: ItemGroups.diligence,
    weekly: Items.shadow_of_the_warrior,
  },
  albedo: {
    name: "Albedo",
    normalizedName: "albedo",
    element: Elements.geo,
    weaponType: WeaponTypes.sword,
    rarity: 5,
    sub: "Geo DMG Bonus",
    constellation: "Princeps Cretaceus",
    description:
      "A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
    local: Items.cecilia,
    commonGroup: ItemGroups.scroll,
    boss: Items.basalt_pillar,
    gemGroup: ItemGroups.geo_gem,
    bookGroup: ItemGroups.ballad,
    weekly: Items.tusk_of_monoceros_caeli,
  },
  zhongli: {
    name: "Zhongli",
    normalizedName: "zhongli",
    element: Elements.geo,
    weaponType: WeaponTypes.polearm,
    rarity: 5,
    sub: "Geo DMG Bonus",
    constellation: "Lapis Dei",
    description:
      "A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
    local: Items.cor_lapis,
    commonGroup: ItemGroups.slime,
    boss: Items.basalt_pillar,
    gemGroup: ItemGroups.geo_gem,
    bookGroup: ItemGroups.gold,
    weekly: Items.tusk_of_monoceros_caeli,
  },
  xinyan: {
    name: "Xinyan",
    normalizedName: "xinyan",
    element: Elements.pyro,
    weaponType: WeaponTypes.claymore,
    rarity: 4,
    sub: "ATK",
    constellation: "Fila Ignium",
    description:
      "Liyue's sole rock 'n' roll musician. She rebels against ossified prejudices using her music and passionate singing.",
    local: Items.violetgrass,
    commonGroup: ItemGroups.treasure_hoarder_insignia,
    boss: Items.everflame_seed,
    gemGroup: ItemGroups.pyro_gem,
    bookGroup: ItemGroups.gold,
    weekly: Items.tusk_of_monoceros_caeli,
  },
  tartaglia: {
    name: "Childe",
    altName: "Tartaglia",
    normalizedName: "tartaglia",
    element: Elements.hydro,
    weaponType: WeaponTypes.bow,
    rarity: 5,
    sub: "Hydro DMG Bonus",
    constellation: "Monoceros Caeli",
    description: 'No. 11 of The Harbingers, also known as "Childe." His name is highly feared on the battlefield.',
    local: Items.starconch,
    commonGroup: ItemGroups.fatui_insignia,
    boss: Items.cleansing_heart,
    gemGroup: ItemGroups.hydro_gem,
    bookGroup: ItemGroups.freedom,
    weekly: Items.shard_of_a_foul_legacy,
  },
  diona: {
    name: "Diona",
    normalizedName: "diona",
    element: Elements.cryo,
    weaponType: WeaponTypes.bow,
    rarity: 4,
    sub: "Cryo DMG Bonus",
    constellation: "Feles",
    description:
      "A young lady who has inherited trace amounts of non-human blood. She is the incredibly popular bartender of the Cat's Tail tavern.",
    local: Items.calla_lily,
    commonGroup: ItemGroups.arrowhead,
    boss: Items.hoarfrost_core,
    gemGroup: ItemGroups.cryo_gem,
    bookGroup: ItemGroups.freedom,
    weekly: Items.shard_of_a_foul_legacy,
  },
  klee: {
    name: "Klee",
    normalizedName: "klee",
    element: Elements.pyro,
    weaponType: WeaponTypes.catalyst,
    rarity: 5,
    sub: "Pyro DMG Bonus",
    constellation: "Trifolium",
    description:
      "An explosives expert and a regular at the Knights of Favonius's confinement room. Also known as Fleeing Sunlight.",
    local: Items.philanemo_mushroom,
    commonGroup: ItemGroups.scroll,
    boss: Items.everflame_seed,
    gemGroup: ItemGroups.pyro_gem,
    bookGroup: ItemGroups.freedom,
    weekly: Items.ring_of_boreas,
  },
  venti: {
    name: "Venti",
    normalizedName: "venti",
    element: Elements.anemo,
    weaponType: WeaponTypes.bow,
    rarity: 5,
    sub: "Energy Recharge",
    constellation: "Carmen Dei",
    description: "One of the many bards of Mondstadt, who freely wanders the city's streets and alleys.",
    local: Items.cecilia,
    commonGroup: ItemGroups.slime,
    boss: Items.hurricane_seed,
    gemGroup: ItemGroups.anemo_gem,
    bookGroup: ItemGroups.ballad,
    weekly: Items.tail_of_boreas,
  },
  keqing: {
    name: "Keqing",
    normalizedName: "keqing",
    element: Elements.electro,
    weaponType: WeaponTypes.sword,
    rarity: 5,
    sub: "CRIT DMG",
    constellation: "Trulla Cementarii",
    description:
      "The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis's unilateral approach to policymaking in Liyue — but in truth, gods admire skeptics such as her quite a lot.",
    local: Items.cor_lapis,
    commonGroup: ItemGroups.nectar,
    boss: Items.lightning_prism,
    gemGroup: ItemGroups.electro_gem,
    bookGroup: ItemGroups.prosperity,
    weekly: Items.ring_of_boreas,
  },
  mona: {
    name: "Mona",
    normalizedName: "mona",
    element: Elements.hydro,
    weaponType: WeaponTypes.catalyst,
    rarity: 5,
    sub: "Energy Recharge",
    constellation: "Astrolabos",
    description:
      'A mysterious young astrologer who proclaims herself to be "Astrologist Mona Megistus," and who possesses abilities to match the title. Erudite, but prideful.',
    local: Items.philanemo_mushroom,
    commonGroup: ItemGroups.nectar,
    boss: Items.cleansing_heart,
    gemGroup: ItemGroups.hydro_gem,
    bookGroup: ItemGroups.resistance,
    weekly: Items.ring_of_boreas,
  },
  qiqi: {
    name: "Qiqi",
    normalizedName: "qiqi",
    element: Elements.cryo,
    weaponType: WeaponTypes.sword,
    rarity: 5,
    sub: "Healing Bonus",
    constellation: "Pristina Nola",
    description:
      "An apprentice and herb gatherer at Bubu Pharmacy. An undead with a bone-white complexion, she seldom has much in the way of words or emotion.",
    local: Items.violetgrass,
    commonGroup: ItemGroups.scroll,
    boss: Items.hoarfrost_core,
    gemGroup: ItemGroups.cryo_gem,
    bookGroup: ItemGroups.prosperity,
    weekly: Items.tail_of_boreas,
  },
  diluc: {
    name: "Diluc",
    normalizedName: "diluc",
    element: Elements.pyro,
    weaponType: WeaponTypes.claymore,
    rarity: 5,
    sub: "CRIT Rate",
    constellation: "Noctua",
    description: "The tycoon of a winery empire in Mondstadt, unmatched in every possible way.",
    local: Items.small_lamp_grass,
    commonGroup: ItemGroups.fatui_insignia,
    boss: Items.everflame_seed,
    gemGroup: ItemGroups.pyro_gem,
    bookGroup: ItemGroups.resistance,
    weekly: Items.dvalins_plume,
  },
  jean: {
    name: "Jean",
    normalizedName: "jean",
    element: Elements.anemo,
    weaponType: WeaponTypes.sword,
    rarity: 5,
    sub: "Healing Bonus",
    constellation: "Leo Minor",
    description:
      "The righteous and rigorous Dandelion Knight, and Acting Grand Master of Mondstadt's Knights of Favonius.",
    local: Items.dandelion_seed,
    commonGroup: ItemGroups.mask,
    boss: Items.hurricane_seed,
    gemGroup: ItemGroups.anemo_gem,
    bookGroup: ItemGroups.resistance,
    weekly: Items.dvalins_plume,
  },
  sucrose: {
    name: "Sucrose",
    normalizedName: "sucrose",
    element: Elements.anemo,
    weaponType: WeaponTypes.catalyst,
    rarity: 4,
    sub: "Anemo DMG Bonus",
    constellation: "Ampulla",
    description: "An alchemist filled with curiosity about all things. She researches bio-alchemy.",
    local: Items.windwheel_aster,
    commonGroup: ItemGroups.nectar,
    boss: Items.hurricane_seed,
    gemGroup: ItemGroups.anemo_gem,
    bookGroup: ItemGroups.freedom,
    weekly: Items.spirit_locket_of_boreas,
  },
  chongyun: {
    name: "Chongyun",
    normalizedName: "chongyun",
    element: Elements.cryo,
    weaponType: WeaponTypes.claymore,
    rarity: 4,
    sub: "ATK",
    constellation: "Nubis Caesor",
    description:
      "A young exorcist from a family of exorcists. He does everything he can to suppress his abundance of yang energy.",
    local: Items.cor_lapis,
    commonGroup: ItemGroups.mask,
    boss: Items.hoarfrost_core,
    gemGroup: ItemGroups.cryo_gem,
    bookGroup: ItemGroups.diligence,
    weekly: Items.dvalins_sigh,
  },
  noelle: {
    name: "Noelle",
    normalizedName: "noelle",
    element: Elements.geo,
    weaponType: WeaponTypes.claymore,
    rarity: 4,
    sub: "DEF",
    constellation: "Parma Cordis",
    description: "A maid who faithfully serves the Knights of Favonius. She dreams of joining their ranks someday.",
    local: Items.valberry,
    commonGroup: ItemGroups.mask,
    boss: Items.basalt_pillar,
    gemGroup: ItemGroups.geo_gem,
    bookGroup: ItemGroups.resistance,
    weekly: Items.dvalins_claw,
  },
  bennett: {
    name: "Bennett",
    normalizedName: "bennett",
    element: Elements.pyro,
    weaponType: WeaponTypes.sword,
    rarity: 4,
    sub: "Energy Recharge",
    constellation: "Rota Calamitas",
    description: "A good-natured adventurer from Mondstadt who's unfortunately extremely unlucky.",
    local: Items.windwheel_aster,
    commonGroup: ItemGroups.treasure_hoarder_insignia,
    boss: Items.everflame_seed,
    gemGroup: ItemGroups.pyro_gem,
    bookGroup: ItemGroups.resistance,
    weekly: Items.dvalins_plume,
  },
  fischl: {
    name: "Fischl",
    normalizedName: "fischl",
    element: Elements.electro,
    weaponType: WeaponTypes.bow,
    rarity: 4,
    sub: "ATK",
    constellation: "Corvus",
    description:
      'A mysterious girl who calls herself "Prinzessin der Verurteilung" and travels with a night raven named Oz.',
    local: Items.small_lamp_grass,
    commonGroup: ItemGroups.arrowhead,
    boss: Items.lightning_prism,
    gemGroup: ItemGroups.electro_gem,
    bookGroup: ItemGroups.ballad,
    weekly: Items.spirit_locket_of_boreas,
  },
  ningguang: {
    name: "Ningguang",
    normalizedName: "ningguang",
    element: Elements.geo,
    weaponType: WeaponTypes.catalyst,
    rarity: 4,
    sub: "Geo DMG Bonus",
    constellation: "Opus Aequilibrium",
    description: "The Tianquan of the Liyue Qixing. Her wealth is unsurpassed in all of Teyvat.",
    local: Items.glaze_lily,
    commonGroup: ItemGroups.fatui_insignia,
    boss: Items.basalt_pillar,
    gemGroup: ItemGroups.geo_gem,
    bookGroup: ItemGroups.prosperity,
    weekly: Items.spirit_locket_of_boreas,
  },
  xingqiu: {
    name: "Xingqiu",
    normalizedName: "xingqiu",
    element: Elements.hydro,
    weaponType: WeaponTypes.sword,
    rarity: 4,
    sub: "ATK",
    constellation: "Fabulae Textile",
    description:
      "A young man carrying a longsword who is frequently seen at book booths. He has a chivalrous heart and yearns for justice and fairness for all.",
    local: Items.silk_flower,
    commonGroup: ItemGroups.mask,
    boss: Items.cleansing_heart,
    gemGroup: ItemGroups.hydro_gem,
    bookGroup: ItemGroups.gold,
    weekly: Items.tail_of_boreas,
  },
  beidou: {
    name: "Beidou",
    normalizedName: "beidou",
    element: Elements.electro,
    weaponType: WeaponTypes.claymore,
    rarity: 4,
    sub: "Electro DMG Bonus",
    constellation: "Victor Mare",
    description: "Captain of her crew, The Crux. She's quite an unbound and forthright woman.",
    local: Items.noctilucous_jade,
    commonGroup: ItemGroups.treasure_hoarder_insignia,
    boss: Items.lightning_prism,
    gemGroup: ItemGroups.electro_gem,
    bookGroup: ItemGroups.gold,
    weekly: Items.dvalins_sigh,
  },
  xiangling: {
    name: "Xiangling",
    normalizedName: "xiangling",
    element: Elements.pyro,
    weaponType: WeaponTypes.polearm,
    rarity: 4,
    sub: "Elemental Mastery",
    constellation: "Trulla",
    description:
      "A renowned chef from Liyue. She's extremely passionate about cooking and excels at making her signature hot and spicy dishes.",
    local: Items.jueyun_chili,
    commonGroup: ItemGroups.slime,
    boss: Items.everflame_seed,
    gemGroup: ItemGroups.pyro_gem,
    bookGroup: ItemGroups.diligence,
    weekly: Items.dvalins_claw,
  },
  razor: {
    name: "Razor",
    normalizedName: "razor",
    element: Elements.electro,
    weaponType: WeaponTypes.claymore,
    rarity: 4,
    sub: "Physical DMG Bonus",
    constellation: "Lupus Minor",
    description:
      "A boy who lives among the wolves in Wolvendom of Mondstadt, away from human civilization. As agile as lightning.",
    local: Items.wolfhook,
    commonGroup: ItemGroups.mask,
    boss: Items.lightning_prism,
    gemGroup: ItemGroups.electro_gem,
    bookGroup: ItemGroups.resistance,
    weekly: Items.dvalins_claw,
  },
  barbara: {
    name: "Barbara",
    normalizedName: "barbara",
    element: Elements.hydro,
    weaponType: WeaponTypes.catalyst,
    rarity: 4,
    sub: "HP",
    constellation: "Crater",
    description: 'Every citizen of Mondstadt adores Barbara. She learned the word "idol" from a magazine.',
    local: Items.philanemo_mushroom,
    commonGroup: ItemGroups.scroll,
    boss: Items.cleansing_heart,
    gemGroup: ItemGroups.hydro_gem,
    bookGroup: ItemGroups.freedom,
    weekly: Items.ring_of_boreas,
  },
  lisa: {
    name: "Lisa",
    normalizedName: "lisa",
    element: Elements.electro,
    weaponType: WeaponTypes.catalyst,
    rarity: 4,
    sub: "Elemental Mastery",
    constellation: "Tempus Fugit",
    description:
      "The languid but knowledgeable Librarian of the Knights of Favonius, deemed by Sumeru Academia to be their most distinguished graduate in the past two centuries.",
    local: Items.valberry,
    commonGroup: ItemGroups.slime,
    boss: Items.lightning_prism,
    gemGroup: ItemGroups.electro_gem,
    bookGroup: ItemGroups.ballad,
    weekly: Items.dvalins_claw,
  },
  kaeya: {
    name: "Kaeya",
    normalizedName: "kaeya",
    element: Elements.cryo,
    weaponType: WeaponTypes.sword,
    rarity: 4,
    sub: "Energy Recharge",
    constellation: "Pavo Ocellus",
    description:
      "An accomplished swordsman and a strategic thinker in the Knights of Favonius, rumored to hail from beyond Mondstadt.",
    local: Items.calla_lily,
    commonGroup: ItemGroups.treasure_hoarder_insignia,
    boss: Items.hoarfrost_core,
    gemGroup: ItemGroups.cryo_gem,
    bookGroup: ItemGroups.ballad,
    weekly: Items.spirit_locket_of_boreas,
  },
  amber: {
    name: "Amber",
    normalizedName: "amber",
    element: Elements.pyro,
    weaponType: WeaponTypes.bow,
    rarity: 4,
    sub: "ATK",
    constellation: "Lepus",
    description:
      "Always energetic and full of life, Amber's the best — albeit only — Outrider of the Knights of Favonius.",
    local: Items.small_lamp_grass,
    commonGroup: ItemGroups.arrowhead,
    boss: Items.everflame_seed,
    gemGroup: ItemGroups.pyro_gem,
    bookGroup: ItemGroups.freedom,
    weekly: Items.dvalins_sigh,
  },
  jeffrey: {
    name: "Jeffrey",
    normalizedName: "jeffrey",
    element: Elements.neutral,
    weaponType: WeaponTypes.sword,
    rarity: 4,
    sub: "ATK",
    constellation: "Star",
    description: "This is Jeff. He is here because no other character was found. (404)",
    local: Items.primogem,
    commonGroup: ItemGroups.arrowhead,
    boss: Items.primogem,
    gemGroup: ItemGroups.traveler_gem,
    bookGroup: ItemGroups.traveler_gem,
    weekly: Items.primogem,
  },
};
