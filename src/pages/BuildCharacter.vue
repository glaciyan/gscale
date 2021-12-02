<script setup lang="ts">
import TheCharacterDetailPanel from "~/components/BuildCharacter/TheCharacterDetailPanel.vue";
import Button from "~/components/Button.vue";
import ElementalIcon from "~/components/icons/Elemental.vue";
import FireIcon from "~/components/icons/Fire.vue";
import GrowthIcon from "~/components/icons/Growth.vue";
import SwordIcon from "~/components/icons/Sword.vue";
import MaterialList from "~/components/MaterialList.vue";
import MaterialPreviewHeader from "~/components/MaterialPreviewHeader.vue";
import SelectorAscensionLevel from "~/components/levelSelector/SelectorAscensionLevel.vue";
import SelectorGroup from "~/components/levelSelector/SelectorGroup.vue";
import SelectorIconSeperator from "~/components/levelSelector/SelectorIconSeperator.vue";
import SelectorTalentLevel from "~/components/levelSelector/SelectorTalentLevel.vue";
import { useAscensionLevelRange } from "~/composites/useAscensionLevelRange";
import { useLevelSelectorTemplate } from "~/composites/useLevelSelectorTemplate";
import { useTalentLevelRange } from "~/composites/useTalentLevelRange";
import { calculateAscension, calculateLeveling, calculateTalent } from "~/lib/calculator";
import { ICharacter } from "~/lib/data/contracts/ICharacter";
import repo from "~/lib/data/repository/GenshinDataRepository";
import mergeAmountByName from "~/lib/item/mergeAmountByName";
import sortItems from "~/lib/item/sortItems";
import title from "~/title";
import Container from "~/components/Container.vue";

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

//#region temp button handler
const loading = ref(false);
const handleClick = () => {
  loading.value = true;
  console.log("button click");
};
whenever(loading, () => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
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
            lg:(flex-grow-0)
          "
        >
          <div class="flex flex-col h-full p-6 justify-between">
            <div>
              <div class="space-y-6">
                <!-- Level -->
                <SelectorGroup title="Level">
                  <SelectorAscensionLevel class="rounded-l-md" id="level1" v-model="ascStart" />
                  <SelectorIconSeperator :element="character.element.normalizedName">
                    <GrowthIcon class="-m-0.5" />
                  </SelectorIconSeperator>
                  <SelectorAscensionLevel cbClass="rounded-r-md" id="level2" v-model="ascGoal" />
                </SelectorGroup>
                <!-- Normal -->
                <SelectorGroup title="Normal Attack">
                  <SelectorTalentLevel class="rounded-l-md" id="normal1" v-model="normalStart" />
                  <SelectorIconSeperator :element="character.element.normalizedName">
                    <SwordIcon class="h-[26px] -m-0.5 w-[26px]" />
                  </SelectorIconSeperator>
                  <SelectorTalentLevel class="rounded-r-md" id="normal2" v-model="normalGoal" />
                </SelectorGroup>
                <!-- Elemental -->
                <SelectorGroup title="Elemental Attack">
                  <SelectorTalentLevel class="rounded-l-md" id="em1" v-model="emStart" />
                  <SelectorIconSeperator :element="character.element.normalizedName">
                    <ElementalIcon class="-m-0.5" />
                  </SelectorIconSeperator>
                  <SelectorTalentLevel class="rounded-r-md" id="em2" v-model="emGoal" />
                </SelectorGroup>
                <!-- Burst -->
                <SelectorGroup title="Burst">
                  <SelectorTalentLevel class="rounded-l-md" id="burst1" v-model="burstStart" />
                  <SelectorIconSeperator :element="character.element.normalizedName">
                    <FireIcon class="-m-0.5" />
                  </SelectorIconSeperator>
                  <SelectorTalentLevel class="rounded-r-md" id="burst2" v-model="burstGoal" />
                </SelectorGroup>
              </div>
              <div class="mt-6">
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

            <Button :element="character.element.normalizedName" :isLoading="loading" @click="handleClick">
              Build {{ character.name }}
            </Button>
          </div>
        </section>
      </div>
      <section class="bg-dark-600 w-full p-6 overflow-y-auto">
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
</template>
