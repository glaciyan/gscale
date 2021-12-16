<script setup lang="ts">
import { RouterLink } from "vue-router";

const navigation: { path: string; name: string }[] = [
  {
    path: "/",
    name: "Characters",
  },
  {
    path: "/builds",
    name: "Your Builds",
  },
];
</script>

<template>
  <div class="flex space-x-2 items-center">
    <RouterLink
      v-for="nav in navigation"
      :key="nav.path"
      :to="nav.path"
      class="
        border
        rounded-lg
        border-dark-500
        text-light-ternary
        py-1
        px-3
        transition-all
        whitespace-nowrap
        hover:(text-light-normal
        bg-dark-500/50
        shadow-sm)
        "
    >
      {{ nav.name }}
    </RouterLink>
  </div>
</template>

<style scoped>
.router-link-active,
.router-link-exact-active {
  @apply bg-dark-500 shadow-md text-light-normal hover:text-light-important;
}
</style>
