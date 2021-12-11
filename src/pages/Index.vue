<script setup lang="ts">
import CharacterCard from "~/components/character/CharacterCard.vue";
import { getCharacterImage } from "~/lib/data/util/getCharacterImage";
import { charactersViewModel } from "~/lib/viewmodel/CharactersViewModel";
import Container from "~/components/PageContainer";
</script>

<template>
  <Container>
    <div w:grid="cols-2 sm:cols-3 lg:cols-4 xl:cols-5" w:gap="5 <sm:2" class="grid">
      <CharacterCard v-for="character in charactersViewModel" :key="character.normalizedName" :character="character" />
    </div>
  </Container>
</template>
