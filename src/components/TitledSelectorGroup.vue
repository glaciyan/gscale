<script setup lang="ts">
import Flex from "./Flex.vue";

defineProps<{ title: string }>();
</script>

<template>
    <section>
        <h2 class="font-semibold text-light-important mb-2">{{ title }}</h2>
        <Flex class="shadow-md w-max">
            <slot />
        </Flex>
    </section>
</template>
