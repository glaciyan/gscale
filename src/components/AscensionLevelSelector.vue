<script lang="ts">
import { AscensionLevel, Levels } from "~/interfaces/AscensionLevel";
import AscensionStarIcon from "~/components/icons/AscensionStarIcon.vue";
import { PropType } from "vue-demi";
import AscensionCheckbox from "./AscensionCheckbox.vue";
import ValueListboxLayout from "./ValueListboxLayout.vue";

export default defineComponent({
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
    components: {
        AscensionStarIcon,
        AscensionCheckbox,
        ValueListboxLayout,
    },
    setup(props, { emit }) {
        const buttonId = props.id + "button";
        const checkboxId = props.id + "checkbox";
        const listId = props.id + "list";

        const update = (val: { level?: number; ascended?: boolean }) => {
            // make a copy of the object and merge with current value https://github.com/vuejs/vue/issues/4373#issuecomment-279826554
            const updatedObject = Object.assign({}, props.value, val);

            emit("update:value", updatedObject);
        };

        const cannotAscend = computed(() => {
            return props.value.level === 1 || props.value.level === 90;
        });

        const listVisible = ref(false);

        const handleListClick = (val: { level?: number; ascended?: boolean }) => {
            listVisible.value = false;
            update(val);
        };

        const list = ref<any>(null);
        const button = ref<any>(null);

        return {
            buttonId,
            checkboxId,
            listId,
            update,
            cannotAscend,
            Levels,
            listVisible,
            handleListClick,
            list,
            button,
        };
    },
});
</script>

<template>
    <ValueListboxLayout>
        <template #button>
            <div class="flex">
                <button
                    :id="buttonId"
                    ref="button"
                    class="
                        bg-dark-400
                        border-r-[1px] border-dark-500
                        text-left
                        w-max
                        py-2
                        px-4
                        text-light-900
                        focus:outline-none
                    "
                    @click="listVisible = !listVisible"
                    aria-haspopup="true"
                    :aria-expanded="listVisible"
                    :aria-controls="listId"
                >
                    {{ value.level }}
                </button>
                <AscensionCheckbox
                    :checkboxId="checkboxId"
                    :modelValue="value.ascended"
                    :disabled="cannotAscend"
                    @update:modelValue="update({ ascended: $event })"
                />
            </div>
        </template>
        <template #list>
            <transition name="appear" @afterEnter="list.focus()" @beforeLeave="button.focus()">
                <div
                    v-if="listVisible"
                    class="rounded-md bg-dark-400 mt-1 text-light-normal z-50 absolute"
                    @keyup.esc.capture="listVisible = false"
                >
                    <teleport to="#app">
                        <div @click.capture="listVisible = false" class="inset-0 z-40 absolute"></div>
                    </teleport>
                    <ul
                        :id="listId"
                        ref="list"
                        tabindex="0"
                        role="listbox"
                        class="list-none m-0 max-h-96 p-0 py-1 overflow-y-auto"
                        :aria-labelledby="buttonId"
                    >
                        <li
                            v-for="option in Levels"
                            tabindex="0"
                            role="option"
                            class="cursor-default flex py-2 pr-6 pl-6 items-center hover:bg-dark-700"
                            @click="handleListClick(option)"
                        >
                            {{ option.level }} <span v-if="option.ascended" class="sr-only">Ascended</span>
                            <AscensionStarIcon v-if="option.ascended" class="flex-shrink-0 ml-1" />
                        </li>
                    </ul>
                </div>
            </transition>
        </template>
    </ValueListboxLayout>
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
