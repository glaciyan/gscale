<script setup lang="ts">
import Button from "./ElementButton.vue";
import GLink from "./GLink";
import HeartIcon from "./icons/HeartIcon.vue";
</script>

<template>
  <GLink to="https://ko-fi.com/glaciyan" target="_blank">
    <Button element="neutral" class="!bg-dark-500 !h-[36px] !text-light-normal !hover:text-red-400">
      <div class="flex items-center"><HeartIcon class="mr-1" /> Support</div>
    </Button>
  </GLink>
</template>
