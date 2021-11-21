<script setup lang="ts">
defineProps<{ title: string; semiBold?: boolean }>();
</script>

<template>
  <div class="mt-2 mb-1">
    <span :class="['mb-1', { 'font-semibold': semiBold }]">{{ title }}</span>
    <div class="flex flex-wrap">
      <slot />
    </div>
  </div>
</template>
