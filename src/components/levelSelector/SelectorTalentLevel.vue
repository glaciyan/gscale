<script setup lang="ts">
import SelectorCustom from "../SelectorCustom.vue";
import { range } from "~/lib/range";

defineProps<{ modelValue: number }>();
defineEmits(["update:modelValue"]);
</script>

<template>
  <SelectorCustom
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    :listItems="range(10)"
  >
    <template #button="{ value }">
      {{ value }}
    </template>
    <template #item="{ option }">
      <span class="mr-2">{{ option }}</span>
    </template>
  </SelectorCustom>
</template>
