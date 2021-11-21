<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <span :class="['mb-1 mt-2', $attrs.class]">{{ title }}</span>
  <div class="flex flex-wrap">
    <slot />
  </div>
</template>
