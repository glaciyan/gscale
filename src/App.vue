<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
    <header class="flex space-x-2">
        <span>gscale</span>
        <Navigation orientation="verical" />
    </header>
    <main id="__gscale" class="min-h-screen mt-[80px]">
        <transition name="fade-300">
            <RouterView />
        </transition>
    </main>
    <footer>
        <hr />
        <span>footer</span>
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

.fade-300-enter-active,
.fade-300-leave-active {
    @apply transition-opacity duration-300;
}

.fade-300-enter-from,
.fade-300-leave-to {
    @apply opacity-0;
}
</style>
