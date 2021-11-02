<script lang="ts">
import AscensionStarIcon from "~/components/icons/AscensionStar.vue";
import Center from "./Center.vue";
import Star from "./icons/Star.vue";

export default defineComponent({
    components: { AscensionStarIcon, Center, StarIcon: Star },
    props: {
        checkboxId: {
            type: String,
            required: true,
        },
        disabled: {
            type: Boolean,
        },
        modelValue: {
            type: Boolean,
        },
    },
    emits: ["update:modelValue"],
    setup() {
        const active = ref(false);

        return {
            active,
        };
    },
});
</script>

<template>
    <label :for="checkboxId">
        <input
            :id="checkboxId"
            class="sr-only"
            type="checkbox"
            aria-label="Ascended"
            :disabled="disabled"
            :aria-checked="modelValue"
            :checked="modelValue"
            @change="$emit('update:modelValue', ($event as any).target.checked)"
        />
        <Center
            :class="[
                'checkbox-focus-visible-ring',
                'cursor-pointer h-full bg-dark-300 transition-colors w-10',
                { 'hover:bg-dark-400/70': !disabled },
                { '!bg-dark-600': active && !disabled },
                { 'cursor-default': disabled },
                $attrs.class,
            ]"
            aria-hidden="true"
            @mousedown="active = true"
            @mouseup="active = false"
            @mouseout="active = false"
        >
            <StarIcon
                :class="[
                    { '!text-genshin-rarity-5': modelValue },
                    { '!text-dark-100/40': disabled },
                    'transition-colors text-dark-100',
                ]"
            />
        </Center>
    </label>
</template>

<style scoped>
input[type="checkbox"]:focus-visible + .checkbox-focus-visible-ring {
    @apply ring;
}
</style>
