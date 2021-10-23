<script setup lang="ts">
import useCharacterFromRoute from "../composites/useCharacterFromRoute";

const { character } = useCharacterFromRoute();
</script>

<template>
    <div>{{ character.name }}</div>
</template>
