<script setup lang="ts">
import { onBeforeMount } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { ICharacter } from "../data/contracts/ICharacter";
import { getCharacterById } from "../data/Characters";

const route = useRoute();
const character = getCharacterById(route.params.character as string) ?? (getCharacterById("jeffrey") as ICharacter);

onBeforeMount(() => {
    document.title = `Building ${character.name} - GScale`;
});
</script>

<template>
    <div>{{ character.name }}</div>
</template>
