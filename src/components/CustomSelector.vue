<script lang="ts">
import ValueListboxLayout from "./ValueListboxLayout.vue";

export default defineComponent({
    components: { ValueListboxLayout },
    props: {
        modelValue: {
            type: [String, Number],
            required: true,
        },
        listItems: {
            type: Array,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
        const buttonId = props.id + "button";
        const listId = props.id + "list";

        const listVisible = ref(false);

        const list = ref<any>(null);
        const button = ref<any>(null);

        const handleListClick = (val: any) => {
            listVisible.value = false;
            emit("update:modelValue", val);
        };

        return {
            buttonId,
            listId,
            listVisible,
            list,
            button,
            handleListClick,
        };
    },
});
</script>

<template>
    <ValueListboxLayout>
        <template #button>
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
                <slot name="button" :value="modelValue" />
            </button>
        </template>
        <template #list>
            <transition name="fade" @afterEnter="list.focus()" @beforeLeave="button.focus()">
                <div
                    v-if="listVisible"
                    class="rounded-md bg-dark-300 mt-1 text-light-normal z-50 absolute"
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
                            v-for="option in listItems"
                            tabindex="0"
                            role="option"
                            class="cursor-default flex py-2 pr-6 pl-6 items-center hover:bg-dark-700"
                            @click="handleListClick(option)"
                        >
                            <slot name="item" :option="option" />
                        </li>
                    </ul>
                </div>
            </transition>
        </template>
    </ValueListboxLayout>
</template>
