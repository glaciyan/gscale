<script setup lang="ts">
import { useBooleanToggle } from "../composites/useBooleanToggle";

const [clamp, toggleClamp] = useBooleanToggle(true);
</script>

<template>
  <p :class="{ 'line-clamp-4': clamp }" @click="toggleClamp">
    <slot />
  </p>
</template>
