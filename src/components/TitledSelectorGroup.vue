<script setup lang="ts">
import Flex from "./Flex.vue";

defineProps<{ title: string }>();
</script>

<template>
  <fieldset>
    <legend class="font-semibold text-light-important mb-2">{{ title }}</legend>
    <Flex class="shadow-md w-max">
      <slot />
    </Flex>
  </fieldset>
</template>
