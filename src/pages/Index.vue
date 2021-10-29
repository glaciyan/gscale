<script setup lang="ts">
import { charactersViewModel } from "../viewmodel/CharactersViewModel";
</script>

<!-- TODO look into statically rendering this page -->
<!-- https://vitejs.dev/guide/ssr.html#pre-rendering-ssg -->
<template>
    <XLContainer>
        <div w:grid="cols-2 sm:cols-3 lg:cols-4 xl:cols-5" w:gap="5 <sm:2" class="grid">
            <CharacterCard
                v-for="character in charactersViewModel"
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
    </XLContainer>
</template>
