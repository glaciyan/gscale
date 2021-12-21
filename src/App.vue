<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <TheHeader />
  <main class="min-h-screen">
    <RouterView />
  </main>
  <TheFooter />
  <div id="totalItems"></div>
  <div id="modal"></div>
</template>

<style>
/* @import url(./assets/fonts/OpenSans.css); */
@import url(./styles/transition/fade.css);
@import url(./styles/dark.css);
</style>
