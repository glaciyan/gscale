<script setup lang="ts">
import { db } from "~/lib/offlineDatabase/db";
import CharacterBuildPreview from "~/components/character/CharacterBuildPreview.vue";
import { Build } from "~/lib/offlineDatabase/db";
import Container from "../components/PageContainer";
import GLink from "~/components/GLink";
import Center from "../components/Center.vue";
import useRandomElement from "~/composites/useRandomElement";
import repo from "~/lib/data/repository/GenshinDataRepository";
import totalBuildItems from "~/lib/item/totalBuildItems";
import mergeAmountByName from "~/lib/item/mergeAmountByName";
import ItemList from "~/components/ItemList.vue";
import PopOver from "~/components/PopOver.vue";
import { useScrollLock } from "@vueuse/core";
import GButton from "~/components/GButton";
import EButton from "~/components/ElementButton.vue";

const { element, pickNew: newElement } = useRandomElement();

const buildsData = ref<Build[]>();
const totalBuilds = ref(0);

const builds = computed(() =>
  buildsData.value
    ? buildsData.value.map((build) => {
        const character = repo.needCharacter(build.entityId);
        const total = totalBuildItems(character, build);

        return {
          character,
          total,
          data: build,
        };
      })
    : []
);

const getBuilds = async () => {
  const buildsFromDb = await db.builds.where("type").equals("character").toArray();
  buildsData.value = buildsFromDb;
  totalBuilds.value = buildsFromDb.length;
};

onBeforeMount(() => {
  getBuilds();
  newElement();
});

const hasBuilds = computed(() => totalBuilds.value > 0);

const handleBuildDelete = () => {
  if (totalBuilds.value <= 1) {
    window.scrollTo({ top: 0 });
  }

  totalBuilds.value--;
};

const total = computed(() => {
  console.log("calculating overall total");
  return mergeAmountByName(builds.value.map((build) => build.total.value));
});

//#region Total Popover
const totalVisible = ref(false);
const lock = useScrollLock(document.body);

const showTotal = () => {
  totalVisible.value = true;
  lock.value = true;
};

const hideTotal = () => {
  totalVisible.value = false;
  lock.value = false;
};
//#endregion
</script>

<template>
  <Container v-if="builds !== null" size="2xl">
    <div class="flex space-x-2 mb-4">
      <GButton @click="showTotal">Show Total</GButton>
    </div>
    <div v-if="hasBuilds" w:grid="gap-5 cols-2 <sm:cols-1" class="grid">
      <CharacterBuildPreview
        v-for="build in builds"
        :key="build.data.id"
        :character="build.character"
        :total="build.total.value"
        :data="build.data"
        @deleted="handleBuildDelete"
      />
    </div>
    <Center v-else>
      <div class="rounded-lg flex flex-col bg-dark-400 shadow-md w-max py-4 px-6 items-center justify-center">
        <div class="m-2 text-6xl">?</div>
        <p>You don't have any builds.</p>
        <GLink to="/" isRouter><EButton :element="element" class="mt-2">Create one</EButton></GLink>
      </div>
    </Center>
  </Container>
  <teleport to="#totalItems">
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
