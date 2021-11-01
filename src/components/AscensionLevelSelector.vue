<script lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/vue";
import { AscensionLevel, Levels } from "~/interfaces/AscensionLevel";
import AscensionStarIcon from "~/components/icons/AscensionStarIcon.vue";
import { PropType } from "vue-demi";
import AscensionCheckbox from "./AscensionCheckbox.vue";

export default defineComponent({
    props: {
        value: {
            type: Object as PropType<AscensionLevel>,
            required: true,
        },
        checkboxId: {
            type: String,
            required: true,
        },
    },
    components: { Listbox, ListboxButton, ListboxOption, ListboxOptions, AscensionStarIcon, AscensionCheckbox },
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
    <Listbox :modelValue="value" @update:modelValue="update($event)">
        <div class="relative">
            <div class="flex">
                <ListboxButton
                    class="
                        cursor-default
                        font-normal font-sans
                        bg-dark-400
                        border-r-[1px] border-dark-500
                        text-base text-left
                        w-max
                        py-2
                        px-4
                        text-light-900
                    "
                >
                    <div>{{ value.level }}</div>
                </ListboxButton>
                <AscensionCheckbox
                    :checkboxId="checkboxId"
                    :modelValue="value.ascended"
                    :disabled="cannotAscend"
                    @update:modelValue="update({ ascended: $event })"
                />
            </div>
            <transition name="appear">
                <ListboxOptions
                    class="rounded-md list-none bg-dark-400 m-0 mt-1 w-max max-h-96 p-0 py-1 overflow-y-auto"
                >
                    <ListboxOption
                        v-slot="{ active }"
                        class=""
                        v-for="option in Levels"
                        :key="option.level + option.ascended.toString()"
                        :value="option"
                    >
                        <div :class="['flex items-center cursor-default py-2 pl-6 pr-6', { 'bg-dark-700': active }]">
                            {{ option.level }} <AscensionStarIcon v-if="option.ascended" class="flex-shrink-0 ml-1" />
                        </div>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>

<style scoped>
.appear-enter-active,
.appear-leave-active {
    @apply transition-opacity duration-100;
}

.appear-enter-from,
.appear-leave-to {
    @apply opacity-0;
}
</style>
