import { IItem } from "../data/contracts/IItem";
import { TravelerTalentBooks } from "../types/TravelerTalentBooks";

export default (books: TravelerTalentBooks): IItem[] => {
  // https://stackoverflow.com/a/56757215
  return [...new Map(Object.values(books).map((group) => [group.normalizedName, group.itemIds])).values()].flat();
};
