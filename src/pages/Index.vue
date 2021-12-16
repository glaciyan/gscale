<script setup lang="ts">
import CharacterCard from "~/components/character/CharacterCard.vue";
import { charactersViewModel } from "~/lib/viewmodel/CharactersViewModel";
import Container from "~/components/PageContainer";
import SearchBar from "~/components/SearchBar.vue";
import useCharacterSearch from "~/composites/useCharacterSearch";
import SearchHelp from "~/components/TheSearchHelp.vue";
import { breakpointsTailwind } from "@vueuse/core";

//#region Search
const search = ref("");
const { result: filteredCharacters, noResults: noSearchResults } = useCharacterSearch(search, charactersViewModel);

const breakpoints = useBreakpoints(breakpointsTailwind);
const placeholder = computed(() => {
  if (breakpoints.sm.value) {
    return "Search for Names, Materials, Elements, etc...";
  } else {
    return "Search...";
  }
});
//#endregion

const characters = computed(() => {
  if (filteredCharacters.value && filteredCharacters.value.length > 0) {
    return filteredCharacters.value.map((res) => res.item);
  } else {
    return charactersViewModel;
  }
});

//#region Search help
const mockSuggestClick = (newVal: string) => {
  search.value = newVal;
};
//#endregion

//#region Press enter to go to first character
const router = useRouter();
const goToFirstCharacter = () => {
  if (characters.value[0]) {
    router.push(`/build/${characters.value[0].normalizedName}`);
  }
};
//#endregion
</script>

<template>
  <Container>
    <SearchBar
      v-model.trim="search"
      class="mb-6 <sm:mb-2"
      :placeholder="placeholder"
      @keydown.enter="goToFirstCharacter"
    />
    <SearchHelp v-if="noSearchResults" :search="search" @click="mockSuggestClick" />
    <div v-else w:grid="cols-2 sm:cols-3 lg:cols-4 xl:cols-5" w:gap="5 <md:2" class="grid">
      <CharacterCard v-for="character in characters" :key="character.normalizedName" :character="character" />
    </div>
  </Container>
</template>
