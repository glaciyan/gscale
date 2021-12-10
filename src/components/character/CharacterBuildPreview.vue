<script setup lang="ts">
import repo from "~/lib/data/repository/GenshinDataRepository";
import { Build, db } from "~/lib/offlineDatabase/db";
import ElementProvider from "../ElementProvider.vue";
import { getCharacterImage } from "~/lib/data/util/getCharacterImage";
import sortItems from "~/lib/item/sortItems";
import { calculateLeveling, calculateAscension, calculateTalent } from "~/lib/calculator";
import mergeAmountByName from "~/lib/item/mergeAmountByName";
import MaterialList from "../MaterialList.vue";
import Button from "../Button.vue";
import RangeLevelDisplay from "../levelRange/display/RangeLevelDisplay.vue";
import RangeTalentDisplay from "../levelRange/display/RangeTalentDisplay.vue";
import Sword from "../icons/Sword.vue";
import Elemental from "../icons/Elemental.vue";
import Fire from "../icons/Fire.vue";

const props = defineProps<{ build: Build }>();
const emit = defineEmits(["deleted"]);

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
          <div class="flex min-h-32 relative sm:w-50">
            <div class="inset-x-0 top-0 absolute fading-out">
              <img
                class="object-cover h-32 w-full opacity-25"
                :src="getCharacterImage(character.normalizedName, 'card').webp"
                width="240"
                height="150"
                draggable="false"
                alt=""
              />
            </div>
            <div class="p-6 relative">
              <p class="font-bold text-lg text-light-important mb-2">{{ character.name }}</p>
              <div class="space-y-2">
                <RangeLevelDisplay :range="build.level" />
                <RangeTalentDisplay title="Normal" :range="build.normal">
                  <template #icon>
                    <Sword class="h-[26px] -m-0.5 w-[26px]" />
                  </template>
                </RangeTalentDisplay>
                <RangeTalentDisplay title="Elemental" :range="build.elemental">
                  <template #icon>
                    <Elemental class="-m-0.5" />
                  </template>
                </RangeTalentDisplay>
                <RangeTalentDisplay title="Burst" :range="build.burst">
                  <template #icon>
                    <Fire class="-m-0.5" />
                  </template>
                </RangeTalentDisplay>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-dark-600 w-full">
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

<style scoped>
.fading-out::after {
  @apply bg-gradient-to-b from-transparent h-full to-dark-700 w-full inset-0 content-none absolute;
}
</style>
