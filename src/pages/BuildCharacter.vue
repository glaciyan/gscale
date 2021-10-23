<script setup lang="ts">
import { onBeforeMount } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { getCharacter, GICharacter } from "../data/Characters";

const route = useRoute();
const character =
    getCharacter(route.params.character as string) ??
    (getCharacter("jeffrey") as GICharacter);

onBeforeMount(() => {
    document.title = `Building ${character.name} - GScale`;
});
</script>

<template>
    <div>{{ character.name }}</div>
</template>
