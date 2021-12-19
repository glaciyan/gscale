<script setup lang="ts">
import { AscensionLevel } from "~/lib/types/AscensionLevel";
import Growth from "../icons/GrowthIcon.vue";
import SelectorAscensionLevel from "../levelSelector/SelectorAscensionLevel.vue";
import SelectorGroup from "../levelSelector/SelectorGroup.vue";
import SelectorIconSeperator from "../levelSelector/SelectorIconSeperator.vue";

defineProps<{
  start: AscensionLevel;
  goal: AscensionLevel;
  element?: string;
  max?: AscensionLevel;
}>();

defineEmits(["update:start", "update:goal"]);
</script>

<template>
  <SelectorGroup legend="Level">
    <SelectorAscensionLevel
      class="rounded-l-md"
      :modelValue="start"
      :maxLevel="max"
      @update:modelValue="$emit('update:start', $event)"
    />
    <SelectorIconSeperator :element="element">
      <Growth class="-m-0.5" />
    </SelectorIconSeperator>
    <SelectorAscensionLevel
      cbClass="rounded-r-md"
      :modelValue="goal"
      :maxLevel="max"
      @update:modelValue="$emit('update:goal', $event)"
    />
  </SelectorGroup>
</template>
