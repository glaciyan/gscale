<script setup lang="ts">
import { IWeapon } from "~/lib/data/contracts/IWeapon";
import GPortrait from "../GPortrait.vue";
import { RouterLink } from "vue-router";

defineProps<{ weapon: IWeapon }>();
</script>

<template>
  <div class="mb-2 mx-1 hover:ring transition-shadow rounded-md">
    <RouterLink :to="`/build/weapon/${weapon.normalizedName}`" :title="weapon.name">
      <GPortrait :normalizedName="weapon.normalizedName" :rarity="weapon.rarity" weapon />
    </RouterLink>
  </div>
</template>
