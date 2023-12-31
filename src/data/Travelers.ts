import { ITraveler } from "./contracts/ITraveler";
import { Elements } from "./Elements";
import { Traveler } from "./entities/Traveler";
import { ItemGroups } from "./ItemGroups";
import { Items } from "./Items";
import TravelersKey from "./keys/TravelersKey";
import { generateTravelerTalentBooks } from "./util/generateTravelerTalentBooks";

const mondstadtBooks = generateTravelerTalentBooks(ItemGroups.freedom, ItemGroups.resistance, ItemGroups.ballad);
const liyueBooks = generateTravelerTalentBooks(ItemGroups.prosperity, ItemGroups.diligence, ItemGroups.gold);
const inazumaBooks = generateTravelerTalentBooks(ItemGroups.transience, ItemGroups.elegance, ItemGroups.light);
const sumeruBooks = generateTravelerTalentBooks(ItemGroups.unknown, ItemGroups.unknown, ItemGroups.unknown);

export const Travelers: { [key in TravelersKey]: ITraveler } = {
  traveler_dendro: new Traveler({
    speculated: true,
    element: Elements.dendro,
    // TODO different way of handling different talent items
    talentBoss: Items.mudra_of_the_malefic_general,
    talentCommonGroup: ItemGroups.fungal_spores,
    talentBooks: sumeruBooks,
    normalTalentBooks: sumeruBooks,
    normalTalentCommonGroup: ItemGroups.fungal_spores,
    normalTalentBoss: Items.mudra_of_the_malefic_general,
  }),
  traveler_electro: new Traveler({
    element: Elements.electro,
    talentBoss: Items.dragon_lords_crown,
    talentCommonGroup: ItemGroups.handguard,
    talentBooks: inazumaBooks,
    normalTalentBooks: inazumaBooks,
    normalTalentCommonGroup: ItemGroups.handguard,
    normalTalentBoss: Items.dragon_lords_crown,
  }),
  traveler_geo: new Traveler({
    element: Elements.geo,
    talentBoss: Items.tail_of_boreas,
    talentCommonGroup: ItemGroups.arrowhead,
    talentBooks: liyueBooks,
    normalTalentBooks: mondstadtBooks,
    normalTalentCommonGroup: ItemGroups.scroll,
    normalTalentBoss: Items.tail_of_boreas,
  }),
  traveler_anemo: new Traveler({
    element: Elements.anemo,
    talentBoss: Items.dvalins_sigh,
    talentCommonGroup: ItemGroups.scroll,
    talentBooks: mondstadtBooks,
    normalTalentBooks: mondstadtBooks,
    normalTalentCommonGroup: ItemGroups.scroll,
    normalTalentBoss: Items.dvalins_sigh,
  }),
};
