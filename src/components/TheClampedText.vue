<script setup lang="ts">
import { useBooleanToggle } from "../composites/useBooleanToggle";

const [clamp, toggleClamp] = useBooleanToggle(true);
</script>

<template>
  <p @click="toggleClamp" :class="{ 'line-clamp-4': clamp }">
    <slot />
  </p>
</template>
