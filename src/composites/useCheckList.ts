import { ItemWithAmount } from "~/lib/types/ItemWithAmount";
import { db } from "~/lib/offlineDatabase/db";

export default (buildId: number) => {
  const items = ref<ItemWithAmount[]>([]);

  // sync with data from db
  const loading = ref(true);

  db.builds
    .get(buildId)
    .then((builds) => {
      const completed = builds?.completed;
      if (completed) items.value = completed;
    })
    .finally(() => {
      loading.value = false;
    });

  const syncToDb = async () => await db.builds.update(buildId, { completed: toRaw(items.value) });

  const newItem = async (item: ItemWithAmount) => {
    items.value.push(Object.assign({}, item));
    await syncToDb();
  };

  const setItemAmount = async (index: number, amount: number) => {
    items.value[index].amount = amount;
    await syncToDb();
  };

  return {
    items,
    loading,
    newItem,
    setItemAmount,
  };
};
