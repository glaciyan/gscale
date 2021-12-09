<script setup lang="ts">
import { navigation } from "~/router";
import { RouterLink } from "vue-router";
import Center from "./Center.vue";
</script>

<template>
  <Center class="space-x-2">
    <RouterLink
      v-for="nav in navigation"
      :to="nav.path"
      class="rounded-lg text-light-ternary py-1 px-3 transition-all hover:(text-light-normal bg-dark-500/50 shadow-sm) "
    >
      {{ nav.name }}
    </RouterLink>
  </Center>
</template>

<style scoped>
.router-link-active,
.router-link-exact-active {
  @apply bg-dark-500 shadow-md text-light-normal hover:text-light-important;
}
</style>
