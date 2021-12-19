<script setup lang="ts">
import { IWeapon } from "~/lib/data/contracts/IWeapon";
import GPortrait from "../GPortrait.vue";

defineProps<{ weapon: IWeapon }>();
</script>

<template>
  <div>
    <p>{{ weapon.normalizedName }}</p>
    <GPortrait :normalizedName="weapon.normalizedName" :rarity="weapon.rarity" weapon />
  </div>
</template>
