<script setup lang="ts">
import repo from "~/lib/data/repository/GenshinDataRepository";
import { Build } from "~/lib/offlineDatabase/db";
import ElementProvider from "../ElementProvider.vue";
import { getCharacterImage } from "~/lib/data/util/getCharacterImage";
import sortItems from "~/lib/item/sortItems";
import { calculateLeveling, calculateAscension, calculateTalent } from "~/lib/calculator";
import mergeAmountByName from "~/lib/item/mergeAmountByName";
import MaterialList from "../MaterialList.vue";
import Button from "../Button.vue";

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

const deleteBuild = async () => {
  if (props.build.id) {
    await db.builds.delete(props.build.id);
    emit("deleted");
  }
};
</script>

<template>
  <ElementProvider :element="character.element">
    <div class="rounded-md flex flex-col bg-dark-700 shadow-md">
      <div class="flex flex-grow">
        <div class="sm:flex">
          <div class="min-h-32 relative sm:w-48">
            <div
              class="
                inset-x-0
                top-0
                z-0
                absolute
                before:(
                content-none
                bg-gradient-to-b
                from-transparent
                h-full
                to-dark-700
                w-full
                inset-0
                z-10
                absolute
                )
                "
            >
              <img
                class="object-cover h-32 w-full opacity-25"
                :src="getCharacterImage(character.normalizedName, 'card').webp"
                width="240"
                height="150"
                draggable="false"
                alt=""
              />
            </div>
            <div class="p-4 inset-0 z-20 absolute">
              <p class="font-bold text-lg text-light-important">{{ character.name }}</p>
              <RangeLevelDisplay :range="build.level" />
            </div>
          </div>
        </div>
        <div class="bg-dark-600">
          <div class="flex flex-wrap h-full h-max p-4">
            <MaterialList :items="items" />
          </div>
        </div>
      </div>
      <div class="flex bg-dark-600/70 border-t-2 border-dark-400 py-3 px-6 justify-end">
        <Button @click="deleteBuild" look="ghost" element="neutral" class="mr-2 !h-9 !text-light-ternary"
          >Delete</Button
        >
        <Button look="outline" class="!h-9">Planner</Button>
      </div>
    </div>
  </ElementProvider>
</template>
