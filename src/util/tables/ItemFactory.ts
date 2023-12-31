import { ItemWithAmount } from "~/model/ItemWithAmount";
import { Items } from "../../lib/data/Items";
import getItemFromGroup from "../../lib/item/getItemFromGroup";
import { tryGetItemWithAmount } from "../../lib/item/tryGetItemWithAmount";
import { Item } from "~/model/Item";
import { ItemGroup } from "~/model/ItemGroup";

export const single = (item?: Item) => {
  return (amount: number): ItemWithAmount => {
    if (!item) return { item: Items.unknown, amount };

    return { item, amount };
  };
};

export const grouped = (group?: ItemGroup) => {
  return (amount: number, rarity: number) => {
    if (!group) return { item: Items.unknown, amount };

    // TODO this is nonsensical, change this when getItemFromGroup is refactored
    return tryGetItemWithAmount(getItemFromGroup(group, rarity), amount);
  };
};

export function mora(amount: number): ItemWithAmount {
  return { item: Items.mora, amount };
}

export function crown(amount: number): ItemWithAmount {
  return { item: Items.crown_of_insight, amount };
}
