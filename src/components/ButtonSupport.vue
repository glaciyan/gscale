<script setup lang="ts">
import HeartIcon from "./icons/HeartIcon.vue";
</script>

<template>
  <a
    href="https://ko-fi.com/glaciyan"
    target="_blank"
    class="
      rounded-lg
      font-semibold
      bg-dark-400
      h-[36px]
      shadow-md
      text-light-normal
      px-4
      transition-colors
      hover:bg-dark-300 hover:text-red-400
      focus:outline-none
      focus-visible:ring
    "
  >
    <div class="flex h-full items-center"><HeartIcon class="mr-1" /> Support</div>
  </a>
</template>
