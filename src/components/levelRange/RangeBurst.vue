<script setup lang="ts">
import SelectorGroup from "../levelSelector/SelectorGroup.vue";
import SelectorTalentLevel from "../levelSelector/SelectorTalentLevel.vue";
import SelectorIconSeperator from "../levelSelector/SelectorIconSeperator.vue";
import Fire from "../icons/Fire.vue";

defineProps<{ start: number; goal: number; element?: string }>();

defineEmits(["update:start", "update:goal"]);
</script>

<template>
  <SelectorGroup legend="Burst">
    <SelectorTalentLevel
      class="rounded-l-md"
      id="burst1"
      :modelValue="start"
      @update:modelValue="$emit('update:start', $event)"
    />
    <SelectorIconSeperator :element="element">
      <Fire class="-m-0.5" />
    </SelectorIconSeperator>
    <SelectorTalentLevel
      class="rounded-r-md"
      id="burst2"
      :modelValue="goal"
      @update:modelValue="$emit('update:goal', $event)"
    />
  </SelectorGroup>
</template>
