<script setup lang="ts">
import ExternalLinkIcon from "./icons/ExternalLinkIcon.vue";
defineProps<{ href: string }>();
</script>

<template>
  <a
    :href="href"
    target="blank"
    rel="noopener"
    :title="href"
    class="cursor-pointer w-max text-blue-400 block hover:underline"
  >
    <div class="flex items-center">
      <slot />
      <ExternalLinkIcon class="h-4 ml-1 w-4" />
    </div>
  </a>
</template>
