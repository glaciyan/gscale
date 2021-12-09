<script setup lang="ts">
import { RouterLink } from "vue-router";
import TheCharacterDetailPanel from "~/components/BuildCharacter/TheCharacterDetailPanel.vue";
import Button from "~/components/Button.vue";
import Container from "~/components/Container.vue";
import ElementProvider from "~/components/ElementProvider.vue";
import RangeBurst from "~/components/levelRange/RangeBurst.vue";
import RangeElemental from "~/components/levelRange/RangeElemental.vue";
import RangeLevel from "~/components/levelRange/RangeLevel.vue";
import RangeNormal from "~/components/levelRange/RangeNormal.vue";
import MaterialList from "~/components/MaterialList.vue";
import MaterialPreviewHeader from "~/components/MaterialPreviewHeader.vue";
import { useAscensionLevelRange } from "~/composites/useAscensionLevelRange";
import { useLevelSelectorTemplate } from "~/composites/useLevelSelectorTemplate";
import { useLoadingFunction } from "~/composites/useLoadingFunction";
import { useTalentLevelRange } from "~/composites/useTalentLevelRange";
import { calculateAscension, calculateLeveling, calculateTalent } from "~/lib/calculator";
import { ICharacter } from "~/lib/data/contracts/ICharacter";
import repo from "~/lib/data/repository/GenshinDataRepository";
import mergeAmountByName from "~/lib/item/mergeAmountByName";
import sortItems from "~/lib/item/sortItems";
import { db } from "~/lib/offlineDatabase/db";
import title from "~/title";

//#region Get character and set title
const route = useRoute();

const character =
  repo.getCharacter(route.params.character as string) ??
  repo.getTraveler(route.params.character as string) ??
  (repo.getCharacter("jeffrey") as ICharacter);

useTitle(title(`Building ${character.name}`));
//#endregion

//#region Levels
const { start: ascStart, goal: ascGoal } = useAscensionLevelRange();
const { start: normalStart, goal: normalGoal } = useTalentLevelRange();
const { start: emStart, goal: emGoal } = useTalentLevelRange();
const { start: burstStart, goal: burstGoal } = useTalentLevelRange();

const { templates } = useLevelSelectorTemplate(
  ascStart,
  ascGoal,
  normalStart,
  normalGoal,
  emStart,
  emGoal,
  burstStart,
  burstGoal
);
//#endregion

//#region Submit build handler
const router = useRouter();

const submitError = ref({ message: "", helpUrl: "" });

const { loading: submitting, execute: handleSubmit } = useLoadingFunction(async () => {
  if (total.value.length === 0) {
    submitError.value = { message: "This build has no materials.", helpUrl: "help/howtouse" };
    return;
  }

  try {
    await db.builds.add({
      type: "character",
      entityId: character.normalizedName,
      // use toRaw here because dexie can't copy a proxy
      level: { start: toRaw(ascStart.value), goal: toRaw(ascGoal.value) },
      normal: { start: normalStart.value, goal: normalGoal.value },
      elemental: { start: emStart.value, goal: emGoal.value },
      burst: { start: burstStart.value, goal: burstGoal.value },
    });

    // TODO remove artificial load time
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve("");
        router.push("/builds");
      }, 3000);
    });
  } catch (error: any) {
    submitError.value = { message: "Something didn't work.", helpUrl: "/help/database" };
  }
});
//#endregion

//#region Compute items
const levelingItems = computed(() => calculateLeveling(ascStart.value, ascGoal.value));

const ascItems = computed(() => sortItems(calculateAscension(character, ascStart.value, ascGoal.value)));
const normalItems = computed(() => sortItems(calculateTalent(character, normalStart.value, normalGoal.value, true)));
const emItems = computed(() => sortItems(calculateTalent(character, emStart.value, emGoal.value)));
const burstItems = computed(() => sortItems(calculateTalent(character, burstStart.value, burstGoal.value)));

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
</script>

<template>
  <ElementProvider :element="character.element.normalizedName">
    <Container>
      <div class="w-full lg:flex lg:h-[48rem]">
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
                  <RangeLevel v-model:start="ascStart" v-model:goal="ascGoal" />
                  <RangeNormal v-model:start="normalStart" v-model:goal="normalGoal" />
                  <RangeElemental v-model:start="emStart" v-model:goal="emGoal" />
                  <RangeBurst v-model:start="burstStart" v-model:goal="burstGoal" />
                </div>
                <div class="mt-6">
                  <div class="mb-2">
                    <span class="font-semibold text-light-important">Templates</span>
                    <!-- TODO <Button look="ghost" class="ml-2 !h-8 !text-light-ternary">Add Custom</Button> -->
                  </div>
                  <Button
                    v-for="template of templates"
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
                <div v-if="submitError.message" class="mb-2">
                  <span class="text-red-400">{{ submitError.message }}</span>
                  {{ " " }}
                  <RouterLink :to="submitError.helpUrl" class="text-blue-400 hover:underline">Help</RouterLink>
                </div>
                <Button :isLoading="submitting" @click="handleSubmit" class="w-full">Build {{ character.name }}</Button>
              </div>
            </div>
          </section>
        </div>
        <section class="bg-dark-600 w-full p-6 overflow-y-auto custom-scrollbar">
          <span class="font-semibold text-light-important">Material Preview</span>
          <div v-if="total.length !== 0" class="flex flex-col">
            <MaterialPreviewHeader title="Total" class="font-semibold">
              <MaterialList :items="total" key="total" />
            </MaterialPreviewHeader>
            <MaterialPreviewHeader title="Ascension">
              <MaterialList :items="ascItems" key="asc" />
            </MaterialPreviewHeader>
            <MaterialPreviewHeader title="Normal Attack">
              <MaterialList :items="normalItems" key="normal" />
            </MaterialPreviewHeader>
            <MaterialPreviewHeader title="Elemental Attack">
              <MaterialList :items="emItems" key="em" />
            </MaterialPreviewHeader>
            <MaterialPreviewHeader title="Burst">
              <MaterialList :items="burstItems" key="burst" />
            </MaterialPreviewHeader>
          </div>
          <!-- TODO make this look like an item -->
          <div v-else>No Items</div>
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
