import { IBaseCharacter } from "../data/contracts/IBaseCharacter";
import { ICharacter } from "../data/contracts/ICharacter";
import { IItem } from "../data/contracts/IItem";
import { ITraveler } from "../data/contracts/ITraveler";
import { Items } from "../data/Items";
import getTravelerBooks from "./getTravelerBooks";

export default (bCharacter: IBaseCharacter): IItem[] => {
  const usualItems = [Items.crown_of_insight, Items.mora, Items.heros_wit];

  if (bCharacter.isTraveler) {
    const char = bCharacter as ITraveler;

    // https://stackoverflow.com/a/56757215
    // Get every book and filter out duplicates
    const books = new Map(
      [...getTravelerBooks(char.talentBooks), ...getTravelerBooks(char.normalTalentBooks)].map((b) => [
        b.normalizedName,
        b,
      ])
    ).values();

    return [
      char.talentBoss,
      ...char.talentCommonGroup.itemIds,
      ...books,
      ...char.normalTalentCommonGroup.itemIds,
      char.normalTalentBoss,
      ...usualItems,
    ];
  } else {
    const char = bCharacter as ICharacter;

    return [
      char.local,
      ...char.commonGroup.itemIds,
      char.boss,
      ...char.gemGroup.itemIds,
      ...char.bookGroup.itemIds,
      char.weekly,
      ...usualItems,
    ];
  }
};
