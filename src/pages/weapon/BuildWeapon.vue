<script setup lang="ts">
import repo from "~/lib/data/repository/GenshinDataRepository";
import { Weapons } from "~/lib/data/Weapons";
import { useAscensionLevelRange } from "~/composites/useAscensionLevelRange";
import RangeLevel from "~/components/levelRange/RangeLevel.vue";
import ElementProvider from "~/components/ElementProvider.vue";
import { Elements } from "~/lib/data/Elements";
import { AscensionLevel } from "~/lib/types/AscensionLevel";
import ItemListHeader from "~/components/ItemListHeader.vue";
import ItemList from "~/components/ItemList.vue";
import GPortrait from "~/components/GPortrait.vue";
import Button from "../../components/ElementButton.vue";

//#region Get weapon from route and handle 404 with a redirect
const router = useRouter();
const route = useRoute();

const weapon = ref(repo.getWeapon(route.params.weapon as string) ?? Weapons.error);

onBeforeMount(() => {
  if (weapon.value.normalizedName === "error") router.push("/weapons");
});
//#endregion

//#region Handle 1-2 star weapons having a max level of 70
const maxLevel = computed<AscensionLevel>(() => {
  switch (weapon.value.rarity) {
    case 1:
    case 2:
      return { level: 70, ascended: false };

    default:
      return { level: 90, ascended: false };
  }
});
//#endregion

const level = useAscensionLevelRange();
const total = computed(() => []);
</script>

<template>
  <ElementProvider :element="Elements.neutral">
    <div class="mx-auto max-w-screen-sm <sm:mx-2">
      <section class="flex bg-dark-700 p-6 <sm:(flex-col space-y-6)">
        <GPortrait :normalizedName="weapon.normalizedName" :rarity="weapon.rarity" weapon />
        <div class="flex flex-col space-y-4 justify-around sm:px-4">
          <p class="font-bold text-light-important">{{ weapon.name }}</p>
          <RangeLevel v-model:start="level.start" v-model:goal="level.goal" :max="maxLevel" />
          <Button class="w-max">Save</Button>
        </div>
      </section>
      <section class="bg-dark-600 w-full p-6 overflow-y-auto custom-scrollbar <sm:p-4">
        <span class="font-semibold text-light-important">Material Preview</span>
        <div v-if="total.length !== 0" class="flex flex-col">
          <ItemListHeader title="Total" class="font-semibold">
            <template #itemList>
              <ItemList :items="total" />
            </template>
          </ItemListHeader>
        </div>
        <div v-else class="rounded-lg flex bg-dark-400 shadow-md mt-2 text-center w-max p-4 items-center">
          <div class="text-center">
            <p>No materials</p>
          </div>
        </div>
      </section>
    </div>
  </ElementProvider>
</template>
