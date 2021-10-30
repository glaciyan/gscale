<script lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/vue";
import { AscensionLevel, Levels } from "~/interfaces/AscensionLevel";
import AscensionStar from "~/assets/icons/asc_star.svg";
import { PropType } from "vue-demi";

export default defineComponent({
    props: {
        value: {
            type: Object as PropType<AscensionLevel>,
            required: true,
        },
    },
    components: { Listbox, ListboxButton, ListboxOption, ListboxOptions, AscensionStar },
    setup(props, { emit }) {
        const update = (val: { level?: number; ascended?: boolean }) => {
            // make a copy of the object and merge with current value https://github.com/vuejs/vue/issues/4373#issuecomment-279826554
            const updatedObject = Object.assign({}, props.value, val);

            emit("update:value", updatedObject);
        };

        const cannotAscend = computed(() => {
            return props.value.level === 1 || props.value.level === 90;
        });

        return {
            update,
            cannotAscend,
            Levels,
        };
    },
});
</script>

<template>
    <Listbox :model-value="value" @update:model-value="$emit('update:value', $event)">
        <div class="flex">
            <ListboxButton
                class="
                    rounded-md
                    cursor-default
                    bg-dark-500
                    shadow-md
                    text-base text-left
                    w-max
                    py-2
                    px-4
                    text-light-900
                "
            >
                {{ value.level }}
            </ListboxButton>
            <input
                type="checkbox"
                aria-label="Ascended"
                :checked="value.ascended"
                :disabled="cannotAscend"
                @change="update({ ascended: ($event as any).target.checked })"
            />
        </div>
        <ListboxOptions>
            <ListboxOption
                v-slot="{ active }"
                class="flex items-center"
                v-for="option in Levels"
                :key="option.level + option.ascended.toString()"
                :value="option"
            >
                {{ active }} {{ option.level }} <AscensionStar v-if="option.ascended" class="ml-1" />
            </ListboxOption>
        </ListboxOptions>
    </Listbox>
</template>
