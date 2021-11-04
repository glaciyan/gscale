<script setup lang="ts">
import Spinner from "./Spinner.vue";
import Center from "./Center.vue";
import { useButtonStyle } from "~/composites/useButtonStyle";

const props = withDefaults(
    defineProps<{
        element: string;
        look?: "solid" | "outline" | "ghost";
        isLoading?: boolean;
        disabled?: boolean;
    }>(),
    {
        look: "solid",
        disabled: false,
        isLoading: false,
    }
);

const _disabled = computed(() => props.isLoading || props.disabled);

const { buttonStyle } = useButtonStyle(props.look, props.element);
</script>

<template>
    <button
        type="button"
        :class="[buttonStyle, 'focus:outline-none focus-visible:ring py-2 px-4 rounded-md']"
        :disabled="_disabled"
        :aria-disabled="_disabled"
    >
        <Center>
            <Spinner v-if="isLoading" class="absolute" />
            <span :class="{ 'opacity-0': isLoading }">
                <slot />
            </span>
        </Center>
    </button>
</template>
