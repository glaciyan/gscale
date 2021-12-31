<script setup lang="ts">
import SelectorCustom from "../SelectorCustom.vue";
import { range } from "~/lib/range";

defineProps<{ modelValue: number; compensating: boolean }>();
defineEmits(["update:modelValue"]);
</script>

<template>
  <SelectorCustom
    :modelValue="modelValue"
    :listItems="range(10)"
    :class="{ 'text-cyan-400': compensating }"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <template #button="{ value }">
      {{ compensating ? value + 3 : value }}
    </template>
    <template #item="{ option }">
      <span class="mr-2">{{ compensating ? option + 3 : option }}</span>
    </template>
  </SelectorCustom>
</template>
