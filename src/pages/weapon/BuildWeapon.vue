<script setup lang="ts">
import repo from "~/lib/data/repository/GenshinDataRepository";
import { Weapons } from "~/lib/data/Weapons";
import PageContainer from "~/components/PageContainer";
import { useAscensionLevelRange } from "~/composites/useAscensionLevelRange";
import RangeLevel from "~/components/levelRange/RangeLevel.vue";
import ElementProvider from "~/components/ElementProvider.vue";
import { Elements } from "~/lib/data/Elements";
import { AscensionLevel } from "~/lib/types/AscensionLevel";

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
</script>

<template>
  <ElementProvider :element="Elements.neutral">
    <PageContainer size="sm">
      <p>{{ weapon.name }}</p>
      <RangeLevel v-model:start="level.start" v-model:goal="level.goal" :max="maxLevel" />
    </PageContainer>
  </ElementProvider>
</template>
