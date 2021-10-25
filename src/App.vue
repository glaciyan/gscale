<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
    <header class="flex space-x-2">
        <span>gscale</span>
        <RouterLink to="/">Characters</RouterLink>
        <RouterLink to="/builds">Builds</RouterLink>
    </header>
    <main id="__gscale" class="min-h-screen">
        <RouterView />
    </main>
    <footer>
        <hr />
        <span>footer</span>
    </footer>
</template>
