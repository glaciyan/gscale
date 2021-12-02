<script setup lang="ts">
import { RouterView } from "vue-router";
import VercelLogo from "~/assets/powered-by-vercel.svg";
import TheHeader from "~/components/TheHeader.vue"
</script>

<template>
  <TheHeader />
  <main id="__gscale" class="min-h-screen">
    <RouterView />
  </main>
  <footer>
    <hr />
    <span>footer</span>
    <a href="https://vercel.com?utm_source=gscale&utm_campaign=oss">
      <img :src="VercelLogo" width="212" height="44" alt="Powered by Vercel" />
    </a>
    <a rel="noopener" href="https://github.com/glaciyan/gscale-amber" target="_blank">Github</a>
  </footer>
</template>

<style>
/* @import url(./assets/fonts/OpenSans.css); */

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-100;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
