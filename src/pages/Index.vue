<script setup lang="ts">
import CharacterCard from "~/components/character/CharacterCard.vue";
import XLContainer from "~/components/container/XLContainer.vue";
import { getCharacterImage } from "~/lib/data/util/getCharacterImage";
import { charactersViewModel } from "~/lib/viewmodel/CharactersViewModel";
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
        :cardUrl="getCharacterImage(character.normalizedName, 'card').webp"
        :buildUrl="`/build/${character.normalizedName}`"
      />
    </div>
  </XLContainer>
</template>
