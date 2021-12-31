<script setup lang="ts">
defineProps<{ legend: string }>();
</script>

<template>
  <fieldset>
    <legend class="font-semibold text-light-important mb-2">{{ legend }}</legend>
    <div class="w-max">
      <slot />
    </div>
  </fieldset>
</template>
