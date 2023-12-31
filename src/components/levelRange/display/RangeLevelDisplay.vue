<script setup lang="ts">
import { AscensionLevel } from "~/lib/types/AscensionLevel";
import StartGoalRange from "~/lib/types/StartGoalRange";
import AscensionLevelDisplay from "../../AscensionLevelDisplay.vue";
import SelectorIconSeperator from "../../levelSelector/SelectorIconSeperator.vue";
import GrowthIcon from "../../icons/GrowthIcon.vue";

defineProps<{ range: StartGoalRange<AscensionLevel> }>();

const className = "flex bg-dark-400 pl-3 items-center w-15";
</script>

<template>
  <div>
    <p class="font-semibold">Level</p>
    <div class="rounded-lg flex h-8 shadow-md w-max overflow-hidden">
      <div :class="className">
        <AscensionLevelDisplay small :ascensionLevel="range.start" />
      </div>
      <SelectorIconSeperator class="!w-9">
        <GrowthIcon class="-m-0.5" />
      </SelectorIconSeperator>
      <div :class="className">
        <AscensionLevelDisplay small :ascensionLevel="range.goal" />
      </div>
    </div>
  </div>
</template>
~/model/AscensionLevel~/model/StartGoalRange