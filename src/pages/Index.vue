<script setup lang="ts">
import CharacterCard from "../components/CharacterCard.vue";
import Characters from "../data/Characters";
import { getCardUrl } from "../data/util/getCardUrl";
import { getElement } from "../data/Elements";
import { getWeaponType } from "../data/WeaponTypes";
</script>

<!-- TODO look into statically rendering this page -->
<!-- https://vitejs.dev/guide/ssr.html#pre-rendering-ssg -->
<template>
    <div class="flex">
        <CharacterCard
            v-for="character in Characters"
            :key="character.id"
            :cardUrl="getCardUrl(character.id)"
            :name="character.name"
            :element="getElement(character.element)!.name"
            :elementId="character.element"
            :weaponType="getWeaponType(character.weaponType)!.name"
            :rarity="character.rarity"
            class="mx-2 mb-4"
        />
    </div>
</template>
