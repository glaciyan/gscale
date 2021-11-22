<script setup lang="ts">
import TheCharacterDetailPanel from "~/components/BuildCharacter/TheCharacterDetailPanel.vue";
import Button from "~/components/Button.vue";
import XLContainer from "~/components/container/XLContainer.vue";
import ElementalIcon from "~/components/icons/Elemental.vue";
import FireIcon from "~/components/icons/Fire.vue";
import GrowthIcon from "~/components/icons/Growth.vue";
import SwordIcon from "~/components/icons/Sword.vue";
import ItemCard from "~/components/ItemCard.vue";
import MaterialPreviewHeader from "~/components/MaterialPreviewHeader.vue";
import SelectorAscensionLevel from "~/components/SelectorAscensionLevel.vue";
import SelectorGroup from "~/components/SelectorGroup.vue";
import SelectorIconSeperator from "~/components/SelectorIconSeperator.vue";
import SelectorTalentLevel from "~/components/SelectorTalentLevel.vue";
import { useAscensionLevelRange } from "~/composites/useAscensionLevelRange";
import { useTalentLevelRange } from "~/composites/useTalentLevelRange";
import { calculateAscension, calculateLeveling, calculateTalent } from "~/lib/calculator";
import { ICharacter } from "~/lib/data/contracts/ICharacter";
import repo from "~/lib/data/repository/GenshinDataRepository";
import { getMaterialImage } from "~/lib/data/util/getMaterialImage";
import mergeAmountByName from "~/lib/mergeAmountByName";
import sortItems from "~/lib/sortItems";
import title from "~/lib/title";

const route = useRoute();

const character =
  repo.getCharacter(route.params.character as string) ??
  repo.getTraveler(route.params.character as string) ??
  (repo.getCharacter("jeffrey") as ICharacter);

useTitle(title(`Building ${character.name}`));

const { start: ascStart, goal: ascGoal } = useAscensionLevelRange();
const { start: normalStart, goal: normalGoal } = useTalentLevelRange();
const { start: emStart, goal: emGoal } = useTalentLevelRange();
const { start: burstStart, goal: burstGoal } = useTalentLevelRange();

// TODO temp
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

// ---------Calculator---------
// Ascension
const ascItems = computed(() => sortItems(calculateAscension(character, ascStart.value, ascGoal.value)));
const levelingItems = computed(() => calculateLeveling(ascStart.value, ascGoal.value));
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
      [(levelingItems.value.mora, levelingItems.value.lazy)],
    ])
  )
);
</script>

<template>
  <XLContainer>
    <div class="w-full lg:flex lg:h-[51.5rem]">
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

            <Button :element="character.element.normalizedName" :isLoading="loading" @click="handleClick">
              Build {{ character.name }}
            </Button>
          </div>
        </section>
      </div>
      <section class="bg-dark-600 w-full p-6">
        <span class="font-semibold text-light-important">Material Preview</span>
        <div v-if="total.length !== 0" class="flex flex-col">
          <MaterialPreviewHeader title="Total" class="font-semibold">
            <ItemCard
              v-for="item in total"
              :key="item.item.normalizedName + 'total'"
              :imageTitle="item.item.name"
              :amount="item.amount"
              :imageUrl="getMaterialImage(item.item.normalizedName).webp"
            />
          </MaterialPreviewHeader>
          <MaterialPreviewHeader title="Ascension">
            <ItemCard
              v-for="item in ascItems"
              :key="item.item.normalizedName + 'asc'"
              :imageTitle="item.item.name"
              :amount="item.amount"
              :imageUrl="getMaterialImage(item.item.normalizedName).webp"
            />
          </MaterialPreviewHeader>
          <MaterialPreviewHeader title="Normal Attack">
            <ItemCard
              v-for="item in normalItems"
              :key="item.item.normalizedName + 'normal'"
              :imageTitle="item.item.name"
              :amount="item.amount"
              :imageUrl="getMaterialImage(item.item.normalizedName).webp"
            />
          </MaterialPreviewHeader>
          <MaterialPreviewHeader title="Elemental Attack">
            <ItemCard
              v-for="item in emItems"
              :key="item.item.normalizedName + 'em'"
              :imageTitle="item.item.name"
              :amount="item.amount"
              :imageUrl="getMaterialImage(item.item.normalizedName).webp"
            />
          </MaterialPreviewHeader>
          <MaterialPreviewHeader title="Burst">
            <ItemCard
              v-for="item in burstItems"
              :key="item.item.normalizedName + 'burst'"
              :imageTitle="item.item.name"
              :amount="item.amount"
              :imageUrl="getMaterialImage(item.item.normalizedName).webp"
            />
          </MaterialPreviewHeader>
        </div>
        <div v-else>No Items</div>
      </section>
    </div>
  </XLContainer>
</template>
