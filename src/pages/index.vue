<script setup lang="ts">
import CharacterCard from "../components/CharacterCard.vue";
import Characters from "../data/characters";
import elements from "../data/elements";
import { getById } from "../data/util/getById";
import { getCardUrl } from "../data/util/getCardUrl";
import weaponTypes from "../data/weaponTypes";
</script>

<!-- TODO look into statically rendering this page -->
<!-- https://vitejs.dev/guide/ssr.html#pre-rendering-ssg -->
<template>
    <div class="flex flex-col">
        <CharacterCard
            v-for="character in Characters"
            :key="character.id"
            :cardUrl="getCardUrl(character.id)"
            :name="character.name"
            :element="getById(elements, character.element)!.name"
            :elementId="character.element"
            :weaponType="getById(weaponTypes, character.weaponType)!.name"
            :rarity="character.rarity"
            class="m-10"
        />
    </div>
</template>
