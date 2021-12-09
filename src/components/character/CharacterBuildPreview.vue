<script setup lang="ts">
import repo from "~/lib/data/repository/GenshinDataRepository";
import { Build } from "~/lib/offlineDatabase/db";
import ElementProvider from "../ElementProvider.vue";
import { getCharacterImage } from "~/lib/data/util/getCharacterImage";
import sortItems from "~/lib/item/sortItems";
import { calculateLeveling, calculateAscension, calculateTalent } from "~/lib/calculator";
import mergeAmountByName from "~/lib/item/mergeAmountByName";
import MaterialList from "../MaterialList.vue";

const props = defineProps<{ build: Build }>();

const character = repo.needCharacter(props.build.entityId);

//#region total items
const levelingItems = calculateLeveling(props.build.level.start, props.build.level.goal);
const items = computed(() =>
  sortItems(
    mergeAmountByName([
      calculateAscension(character, props.build.level.start, props.build.level.goal),
      calculateTalent(character, props.build.normal.start, props.build.normal.goal, true),
      calculateTalent(character, props.build.elemental.start, props.build.elemental.goal),
      calculateTalent(character, props.build.burst.start, props.build.burst.goal),
      [levelingItems.mora, levelingItems.lazy],
    ])
  )
);
//#endregion
</script>

<template>
  <ElementProvider :element="character.element">
    <div class="rounded-md flex flex-col bg-dark-600 shadow-md">
      <div class="sm:flex">
        <div>
          <img
            class="object-cover h-32 w-full opacity-25"
            :src="getCharacterImage(character.normalizedName, 'card').webp"
            width="240"
            height="150"
            draggable="false"
          />
          <div class="p-4">
            <p class="font-bold text-lg">{{ character.name }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <MaterialList :items="items" class="flex flex-wrap" />
      </div>
    </div>
  </ElementProvider>
</template>
