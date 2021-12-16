<script setup lang="ts">
import useRandomElement from "~/composites/useRandomElement";
import SearchIcon from "./icons/SearchIcon.vue";
defineProps<{ modelValue: string; placeholder?: string }>();
defineEmits(["update:modelValue"]);

const searchBar = ref<any>(null);

const { element, pickNew } = useRandomElement();

const handleClick = () => {
  pickNew();
  searchBar.value.focus();
};
</script>

<template>
  <div
    :class="[
      'rounded-lg flex bg-dark-400 shadow-md w-full transition-shadow overflow-hidden items-center focus-within:ring-2 ring-opacity-70',
      `ring-genshin-element-${element}`,
    ]"
    @click="handleClick"
  >
    <SearchIcon class="mx-4 text-light-ternary" />
    <input
      ref="searchBar"
      :value="modelValue"
      class="bg-transparent placeholder-light-ternary h-[42px] text-light-important w-full pr-4 focus:outline-none"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', ($event.target as any).value)"
    />
  </div>
</template>
