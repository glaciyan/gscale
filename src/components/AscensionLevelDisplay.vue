<script setup lang="ts">
import { AscensionLevel } from "~/lib/types/AscensionLevel";
import StarIcon from "./icons/StarIcon.vue";

defineProps<{ ascensionLevel: AscensionLevel; small?: boolean }>();
</script>

<template>
  {{ ascensionLevel.level }}
  <template v-if="ascensionLevel.ascended">
    <span class="sr-only">Ascended</span>
    <StarIcon :class="['flex-shrink-0 ml-1', { 'w-5 h-5': small }]" />
  </template>
</template>
