import { IItem } from "../data/contracts/IItem";
import { ITravelerTalentBooks } from "../data/contracts/ITravelerTalentBooks";

export default (books: ITravelerTalentBooks): IItem[] => {
  // https://stackoverflow.com/a/56757215
  return [...new Map(Object.values(books).map((group) => [group.normalizedName, group.itemIds])).values()].flat();
};
