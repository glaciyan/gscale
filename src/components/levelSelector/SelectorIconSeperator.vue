<script setup lang="ts">
import Center from "../Center.vue";
const props = defineProps<{ element: string }>();

const backgroundColor = `bg-genshin-element-${props.element}-dark`;
</script>

<template>
  <Center
    aria-hidden="true"
    :class="['px-2 border-l-2 border-r-2 border-dark-800 bg-opacity-40 text-light-important', backgroundColor]"
  >
    <slot />
  </Center>
</template>
