<script setup lang="ts">
import AscensionStarIcon from "~/components/icons/AscensionStarIcon.vue";
import { AscensionLevel, Levels } from "~/interfaces/AscensionLevel";
import AscensionCheckbox from "./AscensionCheckbox.vue";
import CustomSelector from "./CustomSelector.vue";

const props = defineProps<{ value: AscensionLevel; id: string; cbClass?: string }>();
const emit = defineEmits(["update:value"]);

const checkboxId = props.id + "checkbox";

const update = (val: { level?: number; ascended?: boolean }) => {
    // make a copy of the object and merge with current value https://github.com/vuejs/vue/issues/4373#issuecomment-279826554
    const updatedObject = Object.assign({}, props.value, val);

    emit("update:value", updatedObject);
};

const cannotAscend = computed(() => {
    return props.value.level === 1 || props.value.level === 90;
});

const keyFunc = (option: AscensionLevel) => option.level + option.ascended.toString();
</script>

<template>
    <CustomSelector
        :id="id"
        :modelValue="value"
        @update:modelValue="$emit('update:value', $event)"
        :listItems="Levels"
        :keyFunc="keyFunc"
        :class="$attrs.class"
    >
        <template #button="slotProps">
            {{ (slotProps.value as any).level }}
        </template>
        <template #item="{ option }">
            {{ option.level }} <span v-if="option.ascended" class="sr-only">Ascended</span>
            <AscensionStarIcon v-if="option.ascended" class="flex-shrink-0 ml-1" />
        </template>
    </CustomSelector>
    <AscensionCheckbox
        :class="cbClass"
        :checkboxId="checkboxId"
        :modelValue="value.ascended"
        :disabled="cannotAscend"
        @update:modelValue="update({ ascended: $event })"
    />
</template>
