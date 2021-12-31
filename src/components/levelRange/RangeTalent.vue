<script setup lang="ts">
import type { Component } from "vue";
import SelectorGroup from "../levelSelector/SelectorGroup.vue";
import SelectorIconSeperator from "../levelSelector/SelectorIconSeperator.vue";
import SelectorTalentLevel from "../levelSelector/SelectorTalentLevel.vue";
import GButton from "../GButton.vue";

defineProps<{ start: number; goal: number; icon: Component; element?: string }>();

defineEmits(["update:start", "update:goal"]);

const [compensating, toggle] = useToggle();
</script>

<template>
  <SelectorGroup legend="Normal Attack">
    <div class="flex shadow-md">
      <SelectorTalentLevel
        class="rounded-l-md"
        :modelValue="start"
        :compensating="compensating"
        @update:modelValue="$emit('update:start', $event)"
      />
      <SelectorIconSeperator :element="element">
        <component :is="icon" class="-m-0.5" />
      </SelectorIconSeperator>
      <SelectorTalentLevel
        class="rounded-r-md"
        :modelValue="goal"
        :compensating="compensating"
        @update:modelValue="$emit('update:goal', $event)"
      />
    </div>
    <GButton
      title="Add 3 to talent"
      :class="['ml-2 !h-[40px]', { 'text-cyan-400': compensating }]"
      @click="() => toggle()"
      >+3</GButton
    >
  </SelectorGroup>
</template>
