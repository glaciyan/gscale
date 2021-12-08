<script setup lang="ts">
import { navigation } from "~/router";
import { RouterLink } from "vue-router";
import Center from "./Center.vue";

defineProps<{ orientation: "verical" | "horizontal" }>();
</script>

<template>
  <Center>
    <RouterLink
      v-for="nav in navigation"
      :to="nav.path"
      class="rounded-lg text-light-ternary py-1 px-3 hover:text-light-normal"
    >
      {{ nav.name }}
    </RouterLink>
  </Center>
</template>

<style scoped>
.router-link-active,
.router-link-exact-active {
  @apply bg-dark-500 text-light-normal hover:text-light-important;
}
</style>
