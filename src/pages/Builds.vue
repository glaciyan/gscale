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
import { downloadObject } from "~/lib/common/downloadObject";
import { GDataFileFormat } from "../lib/types/GDataFileFormat";
import ImportPopOver from "~/components/ImportPopOver.vue";

const DEV = import.meta.env.DEV;

const buildsData = ref<{ character: ICharacter | ITraveler; items: ItemWithAmount[]; data: Build }[]>();
const buildsReady = computed(() => buildsData.value !== undefined);

const getBuilds = async () => {
  const buildsFromDb = await db.builds.where("type").equals("character").toArray();
  buildsData.value = buildsFromDb.map((build) => {
    const character = repo.needCharacter(build.entityId);
    const items = totalBuildItems(character, build);

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

const downloadData = async () => {
  const builds = await db.builds.toArray();
  downloadObject(new GDataFileFormat(1, builds), `gscale_data_${new Date().toISOString()}.json`);
};

const importPopOverVisible = ref(false);
</script>

<template>
  <Container v-if="buildsReady" size="2xl">
    <div v-if="DEV" class="space-x-2 mb-2">
      <GButton @click="tonsOfBuilds">(DEV) Dummy Builds</GButton>
      <GButton @click="clearDb">(DEV) Clear DB</GButton>
    </div>
    <div v-if="buildsData!.length > 0" class="flex space-x-2 mb-4 flex-shrink-0 overflow-x-auto">
      <GButton @click="showTotal">Show Total</GButton>
      <GButton @click="downloadData">Download Data</GButton>
      <GButton @click="importPopOverVisible = true">Import File</GButton>
    </div>
    <transition-group tag="div" name="build-preview" w:grid="gap-5 cols-2 <sm:cols-1" class="grid">
      <CharacterBuildPreview
        v-for="build in buildsData"
        :key="build.data.id"
        :character="build.character"
        :items="build.items"
        :data="build.data"
        @deleted="onDelete"
      />
      <RouterLink
        v-if="buildsData!.length < 2"
        to="/"
        class="border-dashed rounded-xl flex flex-col h-full border-4 border-dark-600 min-h-96 py-4 px-6 transition-colors text-light-ternary/70 block items-center justify-center hover:text-light-ternary"
      >
        <p class="font-bold text-xl">Add a new build</p>
        <p class="font-bold text-xl">+</p>
      </RouterLink>
    </transition-group>
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
  <ImportPopOver :visible="importPopOverVisible" @close="importPopOverVisible = false" />
</template>
