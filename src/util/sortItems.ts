import { ItemWithAmount } from "../types/ItemWithAmount";

// lower index is more important
const categoryPrecedence = [
  "none",
  "currency",
  "character_leveling",
  "local",
  "common",
  "boss",
  "gem",
  "book",
  "weekly",
  "special",
  "special_talent",
];

export default (items: ItemWithAmount[]) => {
  return items.sort(({ item: a }, { item: b }) => {
    const aPriority = categoryPrecedence.findIndex((i) => i === a.category);
    const bPriority = categoryPrecedence.findIndex((i) => i === b.category);

    if (aPriority === bPriority) {
      return a.rarity - b.rarity;
    }

    return aPriority - bPriority;
  });
};
