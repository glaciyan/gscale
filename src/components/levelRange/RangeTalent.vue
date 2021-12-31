<script setup lang="ts">
import type { Component } from "vue";
import SelectorGroup from "../levelSelector/SelectorGroup.vue";
import SelectorIconSeperator from "../levelSelector/SelectorIconSeperator.vue";
import SelectorTalentLevel from "../levelSelector/SelectorTalentLevel.vue";
import GButton from "../GButton.vue";

const props = defineProps<{ start: number; goal: number; upgraded: boolean; icon: Component; element?: string }>();

const emit = defineEmits(["update:start", "update:goal", "update:upgraded"]);

const toggleUpgraded = () => {
  emit("update:upgraded", !props.upgraded);
};
</script>

<template>
  <SelectorGroup legend="Normal Attack">
    <div class="flex shadow-md">
      <SelectorTalentLevel
        class="rounded-l-md"
        :modelValue="start"
        :upgraded="upgraded"
        @update:modelValue="$emit('update:start', $event)"
      />
      <SelectorIconSeperator :element="element">
        <component :is="icon" class="-m-0.5" />
      </SelectorIconSeperator>
      <SelectorTalentLevel
        class="rounded-r-md"
        :modelValue="goal"
        :upgraded="upgraded"
        @update:modelValue="$emit('update:goal', $event)"
      />
    </div>
    <GButton
      title="Add 3 to talent"
      :class="['ml-2 !h-[40px] font-normal', { 'text-cyan-400': upgraded }]"
      @click="toggleUpgraded"
      >+3</GButton
    >
  </SelectorGroup>
</template>
