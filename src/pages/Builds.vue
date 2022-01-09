<script setup lang="ts">
import { useScrollLock } from "@vueuse/core";
import CharacterBuildPreview from "~/components/character/CharacterBuildPreview.vue";
import GButton from "~/components/GButton.vue";
import ItemList from "~/components/ItemList.vue";
import PopOver from "~/components/PopOver.vue";
import { ICharacter } from "~/lib/data/contracts/ICharacter";
import { ITraveler } from "~/lib/data/contracts/ITraveler";
import repo from "~/lib/data/repository/GenshinDataRepository";
import mergeAmountByName from "~/lib/item/mergeAmountByName";
import totalBuildItems from "~/lib/item/totalBuildItems";
import { Build, db } from "~/lib/offlineDatabase/db";
import { ItemWithAmount } from "~/lib/types/ItemWithAmount";
import Container from "../components/PageContainer";
import { RouterLink } from "vue-router";
import clearDb from "~/lib/dev/clearDb";
import tonsOfBuilds from "~/lib/dev/tonsOfBuilds";
import Draggable from "vuedraggable";
import sortingBuilds from "~/lib/util/sortingBuilds";

const DEV = import.meta.env.DEV;

const buildsData = ref<{ character: ICharacter | ITraveler; items: ItemWithAmount[]; data: Build }[]>();
const buildsReady = computed(() => buildsData.value !== undefined);

const getBuilds = async () => {
  const buildsFromDb = await db.builds.where("type").equals("character").toArray();

  let lastOrder = 0;
  buildsData.value = buildsFromDb.sort(sortingBuilds).map((build) => {
    const character = repo.needCharacter(build.entityId);
    const items = totalBuildItems(character, build);

    if (build.order) lastOrder = build.order;
    else build.order = ++lastOrder;

    return {
      character,
      items,
      data: build,
    };
  });
};

const total = computed(() => {
  if (buildsData.value) return mergeAmountByName(buildsData.value.map((build) => build.items));
  else return [];
});

onBeforeMount(() => {
  getBuilds();
});

const onDelete = (id: number) => {
  console.log("deleted", id);

  getBuilds();
};

//#region Total Popover
const totalVisible = ref(false);
const scrollLock = useScrollLock(document.body);

const showTotal = () => {
  totalVisible.value = true;
  scrollLock.value = true;
};

const hideTotal = () => {
  totalVisible.value = false;
  scrollLock.value = false;
};
//#endregion

const handleChange = async ({ moved }: { moved: { element: any; newIndex: number } }) => {
  const element = toRaw(moved.element) as { character: ICharacter | ITraveler; items: ItemWithAmount[]; data: Build };
  const timeChanged = Date.now();

  console.log(`Moved ${element.character.name} to ${moved.newIndex} at ${timeChanged}`);

  await db.builds.update(element.data.id!, { order: moved.newIndex, orderChanged: timeChanged });
};
</script>

<template>
  <Container v-if="buildsReady" size="2xl">
    <div v-if="DEV" class="space-x-2 mb-2">
      <GButton @click="tonsOfBuilds">(DEV) Dummy Builds</GButton>
      <GButton @click="clearDb">(DEV) Clear DB</GButton>
    </div>
    <div v-if="buildsData!.length > 0" class="flex space-x-2 mb-4">
      <GButton @click="showTotal">Show Total</GButton>
    </div>
    <Draggable
      v-model="buildsData"
      tag="transition-group"
      :componentData="{ tag: 'div', name: 'build-preview' }"
      class="grid gap-5 grid-cols-2 <sm:grid-cols-1"
      :itemKey="(item: any) => item.data.id"
      @change="handleChange"
    >
      <template #item="{ element }">
        <CharacterBuildPreview
          :key="element.data.id"
          :character="element.character"
          :items="element.items"
          :data="element.data"
          @deleted="onDelete"
        />
      </template>
    </Draggable>
    <RouterLink
      v-if="buildsData!.length < 1"
      to="/"
      class="border-dashed rounded-xl flex flex-col h-full border-4 border-dark-600 min-h-96 max-w-[750px] py-4 px-6 transition-colors text-light-ternary/70 block items-center justify-center hover:text-light-ternary"
    >
      <p class="font-bold text-xl">Add a new build</p>
      <p class="font-bold text-xl">+</p>
    </RouterLink>
  </Container>
  <teleport to="#modal">
    <PopOver
      :open="totalVisible"
      backdropClass="fixed inset-0 bg-dark-900/80"
      shellClass="fixed inset-0 flex items-center justify-center p-2"
      transition="fade-slow"
      @close="hideTotal"
    >
      <div class="rounded-md flex flex-col max-w-screen-md bg-dark-600 p-4">
        <p class="font-semibold text-lg text-light-important mb-4 ml-2">Total Items</p>
        <div class="flex flex-wrap max-h-[60vh] overflow-y-auto">
          <ItemList :items="total" />
        </div>
        <GButton class="mt-4 w-max self-end" @click="hideTotal">Close</GButton>
      </div>
    </PopOver>
  </teleport>
</template>
