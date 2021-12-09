<script setup lang="ts">
import { AscensionLevel } from "~/lib/interfaces/AscensionLevel";
import StarIcon from "./icons/Star.vue";

defineProps<{ ascensionLevel: AscensionLevel }>();
</script>

<template>
  {{ ascensionLevel.level }}
  <template v-if="ascensionLevel.ascended">
    <span class="sr-only">Ascended</span>
    <StarIcon class="flex-shrink-0 ml-1" />
  </template>
</template>
