import type Fuse from "fuse.js";
import type { Ref } from "vue";
import { IBaseCharacter } from "~/lib/data/contracts/IBaseCharacter";
import { CharacterSearchModel, generateSearchModel } from "~/lib/types/CharacterSearchModel";

export default function (search: Ref<string>, characters: IBaseCharacter[]) {
  const result = ref<Fuse.FuseResult<CharacterSearchModel>[] | null>(null);

  const noResults = computed(() => {
    if (result.value?.length !== undefined && result.value?.length === 0) {
      return search.value.length > 0;
    } else {
      return false;
    }
  });

  let fuse: Fuse<CharacterSearchModel>;

  throttledWatch(
    search,
    async (value) => {
      if (fuse === undefined) {
        const Fuse = (await import("fuse.js")).default;
        const searchModel = characters.map((c) => generateSearchModel(c));
        fuse = new Fuse(searchModel, {
          threshold: 0.2,
          useExtendedSearch: true,

          keys: [
            { name: "name", weight: 3 },
            {
              name: "element.name",
              weight: 2,
            },
            {
              name: "weaponType.name",
              weight: 2,
            },
            "rarity",
            "items",
          ],
        });
      }

      result.value = fuse.search(value);
    },
    { throttle: 300 }
  );

  return {
    result,
    noResults,
  };
}
