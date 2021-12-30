<script setup lang="ts">
import type { Component } from "vue";
import SelectorGroup from "../levelSelector/SelectorGroup.vue";
import SelectorIconSeperator from "../levelSelector/SelectorIconSeperator.vue";
import SelectorTalentLevel from "../levelSelector/SelectorTalentLevel.vue";

defineProps<{ start: number; goal: number; icon: Component; element?: string }>();

defineEmits(["update:start", "update:goal"]);
</script>

<template>
  <SelectorGroup legend="Normal Attack">
    <SelectorTalentLevel class="rounded-l-md" :modelValue="start" @update:modelValue="$emit('update:start', $event)" />
    <SelectorIconSeperator :element="element">
      <component :is="icon" class="-m-0.5" />
    </SelectorIconSeperator>
    <SelectorTalentLevel class="rounded-r-md" :modelValue="goal" @update:modelValue="$emit('update:goal', $event)" />
  </SelectorGroup>
</template>
