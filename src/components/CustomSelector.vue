<script setup lang="ts">
import ValueListboxLayout from "./ValueListboxLayout.vue";
import { onClickOutside } from "@vueuse/core";
import { UseFocusTrap } from "@vueuse/integrations/useFocusTrap/component";

const props = defineProps<{ modelValue: any; listItems: any[]; id: string }>();
const emit = defineEmits(["update:modelValue"]);

const listId = props.id + "list";

const list = ref<any>(null);
const listVisible = ref(false);

const openList = () => {
    listVisible.value = true;
};

const closeList = () => {
    listVisible.value = false;
};

onClickOutside(list, (event) => {
    closeList();
    event.preventDefault();
});

const handleListClick = (val: any) => {
    closeList();
    emit("update:modelValue", val);
};

const buttonId = props.id + "button";
const button = ref<any>(null);
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
                @click="openList()"
                aria-haspopup="true"
                :aria-expanded="listVisible"
                :aria-controls="listId"
            >
                <slot name="button" :value="modelValue" />
            </button>
        </template>
        <template #list>
            <transition name="fade" @afterEnter="list.focus()" @beforeLeave="button.focus()">
                <UseFocusTrap
                    v-if="listVisible"
                    class="rounded-md bg-dark-300 mt-1 text-light-normal z-50 absolute"
                    @keyup.esc.capture="closeList()"
                >
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
                            class="cursor-default flex py-2 pr-6 pl-6 items-center hover:bg-dark-700 focus:bg-dark-700"
                            @click="handleListClick(option)"
                            @keypress.enter="handleListClick(option)"
                            @keypress.space.prevent="handleListClick(option)"
                        >
                            <slot name="item" :option="option" />
                        </li>
                    </ul>
                </UseFocusTrap>
            </transition>
        </template>
    </ValueListboxLayout>
</template>
