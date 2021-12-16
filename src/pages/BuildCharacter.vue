<script setup lang="ts">
import TheCharacterDetailPanel from "~/components/BuildCharacter/TheCharacterDetailPanel.vue";
import Button from "~/components/Button.vue";
import Container from "~/components/PageContainer";
import ElementProvider from "~/components/ElementProvider.vue";
import RangeBurst from "~/components/levelRange/RangeBurst.vue";
import RangeElemental from "~/components/levelRange/RangeElemental.vue";
import RangeLevel from "~/components/levelRange/RangeLevel.vue";
import RangeNormal from "~/components/levelRange/RangeNormal.vue";
import ItemList from "~/components/ItemList.vue";
import ItemListHeader from "~/components/ItemListHeader.vue";
import { useAscensionLevelRange } from "~/composites/useAscensionLevelRange";
import { useLevelSelectorTemplate } from "~/composites/useLevelSelectorTemplate";
import { useLoadingFunction } from "~/composites/useLoadingFunction";
import { useTalentLevelRange } from "~/composites/useTalentLevelRange";
import { calculateAscension, calculateLeveling, calculateTalent } from "~/lib/calculator";
import repo from "~/lib/data/repository/GenshinDataRepository";
import mergeAmountByName from "~/lib/item/mergeAmountByName";
import sortItems from "~/lib/item/sortItems";
import { db } from "~/lib/offlineDatabase/db";
import title from "~/title";
import Growth from "../components/icons/GrowthIcon.vue";
import Sword from "../components/icons/SwordIcon.vue";
import Elemental from "../components/icons/ElementalIcon.vue";
import Fire from "../components/icons/FireIcon.vue";
import ItemPreviewSection from "~/components/ItemPreviewSection.vue";
import getAllCharacterItems from "~/lib/item/getAllCharacterItems";
import { getItemImage } from "~/lib/data/util/getItemImage";

const router = useRouter();
const route = useRoute();

//#region Get character and set title
const character = ref(repo.needCharacter(route.params.character as string));

useTitle(title(`Building ${character.value.name}`));
//#endregion

//#region Levels
const level = useAscensionLevelRange();
const normal = useTalentLevelRange();
const elemental = useTalentLevelRange();
const burst = useTalentLevelRange();

const { templates } = useLevelSelectorTemplate(level, normal, elemental, burst);
//#endregion

//#region Edit handle (TODO temp)
const editId = ref(0);

if (route.query.edit && typeof route.query.edit === "string") {
  const id = parseInt(route.query.edit);

  // is a number (not not)
  if (!isNaN(id)) {
    db.builds.get(id).then((build) => {
      if (build) {
        editId.value = id;

        level.start = build.level.start;
        level.goal = build.level.goal;

        normal.start = build.normal.start;
        normal.goal = build.normal.goal;

        elemental.start = build.elemental.start;
        elemental.goal = build.elemental.goal;

        burst.start = build.burst.start;
        burst.goal = build.burst.goal;
      } else {
        console.error("Couldn't find any build with that id");
      }
    });
  } else {
    console.error("Invalid id format");
  }
}
//#endregion

//#region Submit build handler
const submitError = ref({ message: "", helpUrl: "" });

const { loading: submitting, execute: handleSubmit } = useLoadingFunction(async () => {
  if (total.value.length === 0) {
    submitError.value = { message: "This build has no materials.", helpUrl: "/help/howtouse" };
    return;
  }

  try {
    // TODO temp until inline edit
    if (editId.value) {
      await db.builds.update(editId.value, {
        entityId: character.value.normalizedName,
        // use toRaw here because dexie can't copy a proxy
        level: { start: toRaw(level.start), goal: toRaw(level.goal) },
        normal: { start: normal.start, goal: normal.goal },
        elemental: { start: elemental.start, goal: elemental.goal },
        burst: { start: burst.start, goal: burst.goal },
      });
    } else {
      await db.builds.add({
        type: "character",
        entityId: character.value.normalizedName,
        // use toRaw here because dexie can't copy a proxy
        level: { start: toRaw(level.start), goal: toRaw(level.goal) },
        normal: { start: normal.start, goal: normal.goal },
        elemental: { start: elemental.start, goal: elemental.goal },
        burst: { start: burst.start, goal: burst.goal },
      });
    }

    router.push("/builds");
  } catch (error: any) {
    console.error(error);
    submitError.value = { message: "Something didn't work.", helpUrl: "/help/database" };
  }
});
//#endregion

//#region Compute items
const levelingItems = computed(() => calculateLeveling(level.start, level.goal));

const ascItems = computed(() => sortItems(calculateAscension(character.value, level.start, level.goal)));
const normalItems = computed(() => sortItems(calculateTalent(character.value, normal.start, normal.goal, true)));
const emItems = computed(() => sortItems(calculateTalent(character.value, elemental.start, elemental.goal)));
const burstItems = computed(() => sortItems(calculateTalent(character.value, burst.start, burst.goal)));

const total = computed(() =>
  sortItems(
    mergeAmountByName([
      ascItems.value,
      normalItems.value,
      emItems.value,
      burstItems.value,
      [levelingItems.value.mora, levelingItems.value.lazy],
    ])
  )
);
//#endregion

//#region Preload images
getAllCharacterItems(character.value).map((item) => {
  // Only preloading webp because >95% of users have a compatible browser
  return (new Image().src = getItemImage(item.normalizedName).webp);
});
//#endregion
</script>

<template>
  <ElementProvider :element="character.element">
    <Container>
      <div class="rounded-md w-full overflow-hidden lg:flex lg:h-[48rem]">
        <div class="flex <sm:block">
          <TheCharacterDetailPanel :character="character" />
          <section
            class="
              flex flex-col flex-grow
              bg-dark-600
              text-dark-50
              sm:(w-[20rem]
              border-dark-200 border-r-2)
              lg:(flex-grow-0) "
          >
            <div class="flex flex-col h-full p-6 justify-between">
              <div>
                <div class="space-y-6">
                  <RangeLevel v-model:start="level.start" v-model:goal="level.goal" />
                  <RangeNormal v-model:start="normal.start" v-model:goal="normal.goal" />
                  <RangeElemental v-model:start="elemental.start" v-model:goal="elemental.goal" />
                  <RangeBurst v-model:start="burst.start" v-model:goal="burst.goal" />
                </div>
                <div class="mt-6">
                  <div class="mb-2">
                    <span class="font-semibold text-light-important">Templates</span>
                    <!-- TODO <Button look="ghost" class="ml-2 !h-8 !text-light-ternary">Add Custom</Button> -->
                  </div>
                  <Button
                    v-for="template of templates"
                    :key="template.name"
                    look="outline"
                    element="neutral"
                    class="mr-3 text-light-normal mb-2"
                    @click.prevent="template.applyTemplate"
                  >
                    {{ template.name }}
                  </Button>
                </div>
              </div>
              <div class="w-full">
                <div class="flex flex-col h-8 mb-2 justify-end">
                  <span v-if="submitError.message" class="text-red-400">{{ submitError.message }}</span>
                  <!-- {{ " " }}
                  <RouterLink :to="submitError.helpUrl" class="text-blue-400 hover:underline">Help</RouterLink> -->
                </div>
                <Button :isLoading="submitting" class="w-full" @click="handleSubmit">
                  {{ editId ? "Update" : "Build" }} {{ character.name }}
                </Button>
              </div>
            </div>
          </section>
        </div>
        <section class="bg-dark-600 w-full p-6 overflow-y-auto custom-scrollbar <sm:p-4">
          <span class="font-semibold text-light-important">Material Preview</span>
          <div v-if="total.length !== 0" class="flex flex-col">
            <ItemListHeader title="Total" class="font-semibold">
              <template #itemList>
                <ItemList :items="total" />
              </template>
            </ItemListHeader>
            <ItemPreviewSection :items="ascItems" title="Ascension" :icon="Growth" />
            <ItemPreviewSection :items="normalItems" title="Normal Attack" :icon="Sword" noResize />
            <ItemPreviewSection :items="emItems" title="Elemental Attack" :icon="Elemental" />
            <ItemPreviewSection :items="burstItems" title="Ascension" :icon="Fire" />
          </div>
          <div v-else class="rounded-lg flex bg-dark-400 shadow-md mt-2 text-center w-max p-4 items-center">
            <div class="text-center">
              <p>No materials</p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  </ElementProvider>
</template>

<style scoped lang="less">
@import url(~/styles/scrollbar.less);

@scrollbar-foreground: #7b7b7b;
@scrollbar-background: #252527;
@scrollbar-border-size: 3px;
@scrollbar-width: 12px;
</style>
