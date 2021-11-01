<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header class="flex space-x-2">
        <span>gscale</span>
        <RouterLink to="/">Characters</RouterLink>
        <RouterLink to="/builds">Builds</RouterLink>
    </header>
    <main id="__gscale" class="min-h-screen mt-[80px]">
        <RouterView />
    </main>
    <footer>
        <hr />
        <span>footer</span>
    </footer>
</template>
