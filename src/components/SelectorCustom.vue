<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/vue";
import incrId from "~/lib/incrId";
import Center from "./Center.vue";
import DownChevron from "./icons/DownChevronIcon.vue";

defineProps<{ modelValue: any; listItems: any[] }>();

const id = `selector_${incrId()}`;

defineEmits(["update:modelValue"]);
</script>

<template>
  <Listbox v-slot="{ open }" :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
    <div class="relative">
      <ListboxButton
        :class="$attrs.class"
        class="cursor-pointer font-normal font-sans bg-dark-400 border-r-[1px] border-dark-500 text-left text-base w-max py-2 pr-0 pl-4 transition-colors text-light-900 hover:bg-dark-500 focus:outline-none focus-visible:ring"
      >
        <Center>
          <slot name="button" :value="modelValue" />
          <DownChevron
            :class="['h-5 mx-2 text-light-ternary w-5 transition-transform', { 'transform-gpu -rotate-180': open }]"
          />
        </Center>
      </ListboxButton>
      <div class="absolute">
        <transition name="fade">
          <ListboxOptions
            class="rounded-md list-none bg-dark-300 m-0 mt-1 text-light-normal max-h-[350px] p-0 py-1 z-1 absolute overflow-y-auto custom-scrollbar <sm:max-h-60 w-max"
          >
            <ListboxOption v-for="(option, index) in listItems" :key="id + index" v-slot="{ active }" :value="option">
              <div :class="['cursor-default flex py-2 pr-6 pl-6 items-center', { 'bg-dark-500': active }]">
                <slot name="item" :option="option" />
              </div>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </div>
  </Listbox>
</template>

<style scoped lang="less">
@import url(~/styles/scrollbar.less);

@scrollbar-foreground: #7b7b7b;
@scrollbar-background: #373739;
@scrollbar-border-size: 2px;
@scrollbar-width: 10px;
</style>
