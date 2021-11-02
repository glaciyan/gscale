<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/vue";
import ValueListboxLayout from "./ValueListboxLayout.vue";
import DownChevron from "./icons/DownChevron.vue";
import Flex from "./Flex.vue";
import Center from "./Center.vue";

withDefaults(defineProps<{ modelValue: any; listItems: any[]; id: string; keyFunc?: (option: any) => string }>(), {
    keyFunc: (option) => option,
});

defineEmits(["update:modelValue"]);
</script>

<template>
    <Listbox :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
        <ValueListboxLayout>
            <template #button>
                <ListboxButton
                    class="
                        cursor-pointer
                        font-normal font-sans
                        bg-dark-400
                        border-r-[1px] border-dark-500
                        text-left text-base
                        w-max
                        py-2
                        pr-0
                        pl-4
                        transition-colors
                        text-light-900
                        hover:bg-dark-500
                        focus:outline-none
                        focus-visible:ring
                    "
                >
                    <Center>
                        <slot name="button" :value="modelValue" />
                        <DownChevron class="h-5 mx-2 text-light-ternary w-5" />
                    </Center>
                </ListboxButton>
            </template>
            <template #list>
                <transition name="fade">
                    <ListboxOptions
                        class="
                            rounded-md
                            list-none
                            bg-dark-300
                            m-0
                            mt-1
                            text-light-normal
                            max-h-96
                            p-0
                            py-1
                            z-30
                            absolute
                            overflow-y-auto
                        "
                    >
                        <ListboxOption
                            v-for="option in listItems"
                            :key="keyFunc(option)"
                            :value="option"
                            class="cursor-default flex py-2 pr-6 pl-6 items-center hover:bg-dark-700 focus:bg-dark-700"
                        >
                            <slot name="item" :option="option" />
                        </ListboxOption>
                    </ListboxOptions>
                </transition>
            </template>
        </ValueListboxLayout>
    </Listbox>
</template>
