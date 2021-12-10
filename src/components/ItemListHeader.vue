<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="flex items-center">
    <slot name="icon" />
    <span :class="['mb-1 mt-2 mx-2', $attrs.class]">{{ title }}</span>
  </div>
  <div class="flex flex-wrap">
    <slot name="itemList" />
  </div>
</template>
