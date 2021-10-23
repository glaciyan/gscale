<script setup lang="ts">
import { onBeforeMount } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { ICharacter } from "../data/contracts/ICharacter";
import { getCharacter } from "../data/util/getCharacter";

const route = useRoute();
const character =
    getCharacter(route.params.character as string) ??
    (getCharacter("jeffrey") as ICharacter);

onBeforeMount(() => {
    document.title = `Building ${character.name} - GScale`;
});
</script>

<template>
    <div>{{ character.name }}</div>
</template>
