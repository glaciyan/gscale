<script setup lang="ts">
import CharacterCard from "~/components/character/CharacterCard.vue";
import { charactersViewModel } from "~/lib/viewmodel/CharactersViewModel";
import Container from "~/components/PageContainer";
import SearchBar from "~/components/SearchBar.vue";
import useCharacterSearch from "~/composites/useCharacterSearch";

const search = ref("");
const { result: filteredCharacters, noResults: noSearchResults } = useCharacterSearch(search, charactersViewModel);

const characters = computed(() => {
  if (filteredCharacters.value && filteredCharacters.value.length > 0) {
    return filteredCharacters.value.map((res) => res.item);
  } else {
    return charactersViewModel;
  }
});
</script>

<template>
  <Container>
    <SearchBar v-model="search" class="mb-6 <sm:mb-2" placeholder="Search for Names, Materials, Elements, etc..." />
    <p v-if="noSearchResults">No Results</p>
    <div v-else w:grid="cols-2 sm:cols-3 lg:cols-4 xl:cols-5" w:gap="5 <md:2" class="grid">
      <CharacterCard v-for="character in characters" :key="character.normalizedName" :character="character" />
    </div>
  </Container>
</template>
