<script setup lang="ts">
import { useElementContext } from "~/composites/useElementContext";
import Center from "../Center.vue";
const props = defineProps<{ element?: string }>();

const element = useElementContext();

const backgroundColor = computed(() => `bg-genshin-element-${props.element ?? element.value.normalizedName}-dark`);
</script>

<template>
  <Center
    aria-hidden="true"
    :class="['px-2 border-l-2 border-r-2 border-dark-800 bg-opacity-40 text-light-important', backgroundColor]"
  >
    <slot />
  </Center>
</template>
