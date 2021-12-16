<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div>
    <p class="font-semibold text-light-important mb-4">{{ title }}</p>
    <slot />
  </div>
</template>
