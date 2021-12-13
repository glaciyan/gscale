import { ItemWithAmount } from "~/lib/data/entities/ItemWithAmount";

export default (dbId: number) => {
  const items = ref<ItemWithAmount[]>([]);

  const newItem = (item: ItemWithAmount) => {
    items.value.push(Object.assign({}, item));
  };

  const setItemAmount = (index: number, amount: number) => {
    items.value[index].amount = amount;
  };

  return {
    items,
    newItem,
    setItemAmount,
  };
};
