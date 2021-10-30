<script lang="ts">
import AscensionStarIcon from "~/components/icons/AscensionStarIcon.vue";
import Center from "./Center.vue";

export default defineComponent({
    components: { AscensionStarIcon, Center },
    emits: ["update:modelValue"],
    props: {
        checkboxId: {
            type: String,
            require: true,
        },
        disabled: {
            type: Boolean,
        },
        modelValue: {
            type: Boolean,
        },
    },
});
</script>

<template>
    <label :for="checkboxId">
        <input
            :id="checkboxId"
            type="checkbox"
            aria-label="Ascended"
            :disabled="disabled"
            :aria-checked="modelValue"
            :checked="modelValue"
            @change="$emit('update:modelValue', ($event as any).target.checked)"
        />
        <Center class="h-full bg-dark-400 w-10">
            <AscensionStarIcon :class="[{ 'text-genshin-rarity-5': modelValue }, 'w-full h-full']" />
        </Center>
    </label>
</template>

<style scoped>
input {
    height: 1px;
    width: 1px;
    padding: 0px;
    margin: -1px;
    position: absolute;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    white-space: nowrap;
    overflow: hidden;
}
</style>
