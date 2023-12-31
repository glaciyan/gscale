<script setup lang="ts">
import SelectorCustom from "../SelectorCustom.vue";
import { range } from "~/lib/range";

defineProps<{ modelValue: number; upgraded: boolean }>();
defineEmits(["update:modelValue"]);
</script>

<template>
  <SelectorCustom
    :modelValue="modelValue"
    :listItems="range(10)"
    :class="{ 'text-cyan-400': upgraded }"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <template #button="{ value }">
      {{ upgraded ? value + 3 : value }}
    </template>
    <template #item="{ option }">
      <span class="mr-2">{{ upgraded ? option + 3 : option }}</span>
    </template>
  </SelectorCustom>
</template>
~/util/range