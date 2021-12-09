<script setup lang="ts">
import { AscensionLevel } from "~/lib/interfaces/AscensionLevel";
import StartGoalRange from "~/lib/interfaces/StartGoalRange";

defineProps<{ range: StartGoalRange<AscensionLevel> }>();
</script>

<template>
  <div class="flex">
    <p class="font-semibold">Level</p>
  </div>
</template>
