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
</template>

<style>
/* @import url(./assets/fonts/OpenSans.css); */
@import url(./styles/global.less);
@import url(./styles/transition/fade.css);
@import url(./styles/transition/build-preview.css);
@import url(./styles/dark.css);
</style>
