import { IItemGroup } from "./data/contracts/IItemGroup";

export default (itemGroup: IItemGroup, rartiy: number) => itemGroup.itemIds.find((item) => item.rarity === rartiy);
