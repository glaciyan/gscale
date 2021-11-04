<script setup lang="ts">
import Flex from "./Flex.vue";

defineProps<{ title: string }>();
</script>

<template>
    <div>
        <h2 class="font-semibold text-light-important mb-2">{{ title }}</h2>
        <Flex class="shadow-md w-max">
            <slot />
        </Flex>
    </div>
</template>
