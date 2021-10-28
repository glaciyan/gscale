<script setup lang="ts">
import CharacterCard from "../components/character/CharacterCard.vue";
import Characters from "../data/Characters";
const characters = Object.values(Characters);
</script>

<!-- TODO look into statically rendering this page -->
<!-- https://vitejs.dev/guide/ssr.html#pre-rendering-ssg -->
<template>
    <div class="mx-auto max-w-screen-xl">
        <div w:grid="cols-2 sm:cols-3 lg:cols-4 xl:cols-5" w:gap="5 <sm:2" w:p="<sm:2 <xl:5" class="grid">
            <CharacterCard
                v-for="character in characters"
                :key="character.name"
                :name="character.name"
                :element="character.element.name"
                :elementId="character.element.normalizedName"
                :weaponType="character.weaponType.name"
                :rarity="character.rarity"
                :cardUrl="`/images/characters/card/${character.normalizedName}.webp`"
                :buildUrl="`/build/${character.normalizedName}`"
            />
        </div>
    </div>
</template>
