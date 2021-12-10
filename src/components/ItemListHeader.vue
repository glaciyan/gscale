<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="flex mt-2 mb-1 items-center">
    <slot name="icon" />
    <span :class="['ml-2', $attrs.class]">{{ title }}</span>
  </div>
  <div class="flex flex-wrap">
    <slot name="itemList" />
  </div>
</template>
