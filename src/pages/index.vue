<script setup lang="ts">
import Characters from "../data/characters";
import CharacterCard from "../components/CharacterCard.vue";
import { getCardUrl } from "../data/util/getCardUrl";
import { getById } from "../data/util/getById";
import elements from "../data/elements";
import weaponTypes from "../data/weaponTypes";
</script>

<template>
    <div class="flex flex-col">
        <CharacterCard
            v-for="character in Characters"
            :key="character.id"
            :cardUrl="getCardUrl(character.id)"
            :name="character.name"
            :element="getById(elements, character.element)?.name ?? 'cryo'"
            :elementId="character.element"
            :weaponType="getById(weaponTypes, character.weaponType)?.name ?? 'sword'"
            :rarity="character.rarity"
            class="m-10"
        />
    </div>
</template>
