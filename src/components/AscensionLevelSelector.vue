<script lang="ts">
import { AscensionLevel, Levels } from "~/interfaces/AscensionLevel";
import AscensionStarIcon from "~/components/icons/AscensionStarIcon.vue";
import { PropType } from "vue-demi";
import AscensionCheckbox from "./AscensionCheckbox.vue";
import ValueListboxLayout from "./ValueListboxLayout.vue";
import CustomSelector from "./CustomSelector.vue";

export default defineComponent({
    components: {
        AscensionStarIcon,
        AscensionCheckbox,
        ValueListboxLayout,
        CustomSelector,
    },
    props: {
        value: {
            type: Object as PropType<AscensionLevel>,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
    },
    setup(props, { emit }) {
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

        return {
            checkboxId,
            update,
            cannotAscend,
            Levels,
            keyFunc,
        };
    },
});
</script>

<template>
    <CustomSelector
        :id="id"
        :modelValue="value"
        @update:modelValue="$emit('update:value', $event)"
        :listItems="Levels"
        :keyFunc="keyFunc"
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
        :checkboxId="checkboxId"
        :modelValue="value.ascended"
        :disabled="cannotAscend"
        @update:modelValue="update({ ascended: $event })"
    />
</template>
