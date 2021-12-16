<script setup lang="ts">
import CharacterCard from "~/components/character/CharacterCard.vue";
import { charactersViewModel } from "~/lib/viewmodel/CharactersViewModel";
import Container from "~/components/PageContainer";
import SearchBar from "~/components/SearchBar.vue";
import useCharacterSearch from "~/composites/useCharacterSearch";
import MockSearch from "~/components/MockSearch.vue";

const search = ref("");
const { result: filteredCharacters, noResults: noSearchResults } = useCharacterSearch(search, charactersViewModel);

const characters = computed(() => {
  if (filteredCharacters.value && filteredCharacters.value.length > 0) {
    return filteredCharacters.value.map((res) => res.item);
  } else {
    return charactersViewModel;
  }
});

const mockSuggestClick = (newVal: string) => {
  search.value = newVal;
};
</script>

<template>
  <Container>
    <SearchBar
      v-model.trim="search"
      class="mb-6 <sm:mb-2"
      placeholder="Search for Names, Materials, Elements, etc..."
    />
    <template v-if="noSearchResults">
      <p class="text-light-normal">
        No results for "<span class="text-light-important">{{ search }} </span>"
      </p>
      <p class="mt-2">Try someting like:</p>
      <div class="space-y-2 my-2">
        <MockSearch term="Ganyu" @click="mockSuggestClick" />
        <MockSearch term="Pyro" @click="mockSuggestClick" />
        <MockSearch term="Windwheel Aster" @click="mockSuggestClick" />
        <MockSearch term="Bow | Claymore" @click="mockSuggestClick" />
      </div>
    </template>
    <div v-else w:grid="cols-2 sm:cols-3 lg:cols-4 xl:cols-5" w:gap="5 <md:2" class="grid">
      <CharacterCard v-for="character in characters" :key="character.normalizedName" :character="character" />
    </div>
  </Container>
</template>
