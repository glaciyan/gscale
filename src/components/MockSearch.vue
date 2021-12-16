<script setup lang="ts">
import SearchIcon from "./icons/SearchIcon.vue";

defineProps<{ term: string }>();
defineEmits(["click"]);
</script>

<template>
  <div
    class="
      rounded-lg
      cursor-pointer
      flex
      bg-dark-400
      h-[42px]
      shadow-md
      w-full w-max
      transition-shadow
      overflow-hidden
      items-center
    "
    :title="`Search for ${term}`"
    @click="$emit('click', term)"
  >
    <SearchIcon class="mx-4 text-light-ternary" />
    <p class="mr-8">{{ term }}</p>
  </div>
</template>
