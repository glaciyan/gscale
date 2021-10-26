<script setup lang="ts">
import CharacterCard from "../components/character/CharacterCard.vue";
import Characters from "../data/Characters";
import { getElement } from "../data/util/getElement";
import { getWeaponType } from "../data/util/getWeaponType";
</script>

<!-- TODO look into statically rendering this page -->
<!-- https://vitejs.dev/guide/ssr.html#pre-rendering-ssg -->
<template>
    <div class="mx-auto max-w-screen-xl">
        <div w:grid="cols-2 sm:cols-3 lg:cols-4 xl:cols-5" w:gap="5 <sm:2" w:p="<sm:2 <xl:5" class="grid">
            <CharacterCard
                v-for="character in Characters"
                :key="character.id"
                :name="character.name"
                :element="getElement(character.element)!.name"
                :elementId="character.element"
                :weaponType="getWeaponType(character.weaponType)!.name"
                :rarity="character.rarity"
                :cardUrl="`/images/characters/card/${character.id}.webp`"
                :buildUrl="`/build/${character.id}`"
            />
        </div>
    </div>
</template>
