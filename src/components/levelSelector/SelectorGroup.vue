<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <fieldset>
    <legend class="font-semibold text-light-important mb-2">{{ title }}</legend>
    <div class="flex shadow-md w-max">
      <slot />
    </div>
  </fieldset>
</template>
