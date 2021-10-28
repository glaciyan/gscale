<script setup lang="ts">
import { booleanToggle } from "../composites/booleanToggle";

const [clamp, toggleClamp] = booleanToggle(true);
</script>

<template>
    <p @click="toggleClamp" :class="{ 'line-clamp-4': clamp }">
        <slot />
    </p>
</template>
