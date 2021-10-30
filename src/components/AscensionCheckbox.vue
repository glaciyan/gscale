<script lang="ts">
import AscensionStar from "~/assets/icons/asc_star.svg";
import Center from "./Center.vue";

export default defineComponent({
    components: { AscensionStar, Center },
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
            :name="checkboxId"
            class="h-px -m-px w-px p-0 appearance-none absolute whitespace-nowrap overflow-hidden"
            type="checkbox"
            aria-label="Ascended"
            :disabled="disabled"
            :aria-checked="modelValue"
            :checked="modelValue"
            @change="$emit('update:modelValue', ($event as any).target.checked)"
        />
        <Center class="h-full bg-dark-400 w-10">
            <AscensionStar :class="[{ 'text-genshin-rarity-5': modelValue }, 'w-full h-full']" />
        </Center>
    </label>
</template>
