import { IItem } from "../data/contracts/IItem";
import { IItemGroup } from "../data/contracts/IItemGroup";
import { ItemWithAmount } from "../types/ItemWithAmount";
import { Items } from "../data/Items";
import getItemFromGroup from "./getItemFromGroup";
import { tryGetItemWithAmount } from "./tryGetItemWithAmount";

export const single = (item?: IItem) => {
  return (amount: number): ItemWithAmount => {
    if (!item) return { item: Items.unknown, amount };

    return { item, amount };
  };
};

export const grouped = (group?: IItemGroup) => {
  return (amount: number, rarity: number) => {
    if (!group) return { item: Items.unknown, amount };

    return tryGetItemWithAmount(getItemFromGroup(group, rarity), amount);
  };
};

export function mora(amount: number): ItemWithAmount {
  return { item: Items.mora, amount };
}

export function crown(amount: number): ItemWithAmount {
  return { item: Items.crown_of_insight, amount };
}
