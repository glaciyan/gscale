<script setup lang="ts">
import HeartIcon from "./icons/HeartIcon.vue";
import GButton from "./GButton";
</script>

<template>
  <GButton as="a" href="https://ko-fi.com/glaciyan" target="_blank" class="!h-[36px] hover:text-red-400">
    <div class="flex items-center"><HeartIcon class="mr-1" /> Support</div>
  </GButton>
</template>
