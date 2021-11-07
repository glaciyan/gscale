<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import VercelLogo from "~/assets/powered-by-vercel.svg";
</script>

<template>
  <header class="flex space-x-2">
    <span>gscale</span>
    <Navigation orientation="verical" />
  </header>
  <main id="__gscale" class="min-h-screen mt-[80px]">
    <RouterView />
  </main>
  <footer>
    <hr />
    <span>footer</span>
    <a href="https://vercel.com?utm_source=gscale&utm_campaign=oss">
      <img :src="VercelLogo" width="212" height="44" alt="Powered by Vercel" />
    </a>
  </footer>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-100;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
