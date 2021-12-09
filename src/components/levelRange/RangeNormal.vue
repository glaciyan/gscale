<script setup lang="ts">
import SelectorGroup from "../levelSelector/SelectorGroup.vue";
import SelectorTalentLevel from "../levelSelector/SelectorTalentLevel.vue";
import SelectorIconSeperator from "../levelSelector/SelectorIconSeperator.vue";
import Sword from "../icons/Sword.vue";

// TODO model with start goal range
defineProps<{ start: number; goal: number; element?: string }>();

defineEmits(["update:start", "update:goal"]);
</script>

<template>
  <SelectorGroup legend="Normal Attack">
    <SelectorTalentLevel class="rounded-l-md" :modelValue="start" @update:modelValue="$emit('update:start', $event)" />
    <SelectorIconSeperator :element="element">
      <Sword class="h-[26px] -m-0.5 w-[26px]" />
    </SelectorIconSeperator>
    <SelectorTalentLevel class="rounded-r-md" :modelValue="goal" @update:modelValue="$emit('update:goal', $event)" />
  </SelectorGroup>
</template>
