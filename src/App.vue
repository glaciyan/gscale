<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
    <header>
        <span>header</span>
        <RouterLink to="/">Characters</RouterLink>
        <RouterLink to="/builds">Builds</RouterLink>
    </header>
    <main>
        <RouterView></RouterView>
    </main>
</template>
