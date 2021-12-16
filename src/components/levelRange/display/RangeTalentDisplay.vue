<script setup lang="ts">
import StartGoalRange from "~/lib/types/StartGoalRange";
import SelectorIconSeperator from "../../levelSelector/SelectorIconSeperator.vue";

defineProps<{ range: StartGoalRange<number>; title: string }>();

const className = "flex bg-dark-400 pl-3 items-center w-15 <lg:(w-9 pl-2)";
</script>

<template>
  <div>
    <p class="font-semibold">{{ title }}</p>
    <div class="rounded-lg flex h-8 shadow-md w-max overflow-hidden">
      <div :class="className">
        {{ range.start }}
      </div>
      <SelectorIconSeperator class="!w-9">
        <slot name="icon" />
      </SelectorIconSeperator>
      <div :class="className">
        {{ range.goal }}
      </div>
    </div>
  </div>
</template>
