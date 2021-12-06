<script setup lang="ts">
import SelectorGroup from "../levelSelector/SelectorGroup.vue";
import SelectorTalentLevel from "../levelSelector/SelectorTalentLevel.vue";
import SelectorIconSeperator from "../levelSelector/SelectorIconSeperator.vue";
import Elemental from "../icons/Elemental.vue";

defineProps<{ start: number; goal: number; element?: string }>();

defineEmits(["update:start", "update:goal"]);
</script>

<template>
  <SelectorGroup legend="Elemental Attack">
    <SelectorTalentLevel class="rounded-l-md" :modelValue="start" @update:modelValue="$emit('update:start', $event)" />
    <SelectorIconSeperator :element="element">
      <Elemental class="-m-0.5" />
    </SelectorIconSeperator>
    <SelectorTalentLevel class="rounded-r-md" :modelValue="goal" @update:modelValue="$emit('update:goal', $event)" />
  </SelectorGroup>
</template>
