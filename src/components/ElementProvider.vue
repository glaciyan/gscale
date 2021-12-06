<script setup lang="ts">
const props = defineProps<{ element: string }>();

provide("element", props.element);
</script>

<template>
  <slot />
</template>
