<script setup lang="ts">
import { navigation } from "~/routes";
import { RouterLink } from "vue-router";
import Center from "./Center.vue";

defineProps<{ orientation: "verical" | "horizontal" }>();
</script>

<template>
  <Center>
    <RouterLink v-for="nav in navigation" :to="nav.path" class="text-light-ternary seperator hover:text-light-normal">{{
      nav.name
    }}</RouterLink>
  </Center>
</template>

<style scoped>
.seperator:not(:last-child)::after {
  content: "";
  @apply bg-dark-300 h-5 mx-2 w-px inline-block;
}

.router-link-active,
.router-link-exact-active {
  @apply text-light-normal hover:text-light-important;
}
</style>
