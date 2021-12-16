<script setup lang="ts">
import CharacterCard from "~/components/character/CharacterCard.vue";
import { charactersViewModel } from "~/lib/viewmodel/CharactersViewModel";
import Container from "~/components/PageContainer";
import SearchBar from "~/components/SearchBar.vue";
import type Fuse from "fuse.js";
import { ICharacterViewModel } from "~/lib/data/contracts/ICharacterViewModel";

//#region Search
const filteredCharacters = ref<Fuse.FuseResult<ICharacterViewModel>[] | null>(null);
const search = ref("");
let fuse: Fuse<ICharacterViewModel>;

throttledWatch(
  search,
  async (value) => {
    const Fuse = (await import("fuse.js")).default;
    if (fuse === undefined) {
      fuse = new Fuse(Object.values(charactersViewModel), {
        threshold: 0.2,
        useExtendedSearch: true,
        keys: [{ name: "name", weight: 3 }],
      });
    }

    filteredCharacters.value = fuse.search(value);
  },
  { throttle: 300 }
);
//#endregion

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
    <SearchBar v-model="search" placeholder="Search for Names, Materials, Elements, etc..." />
    <div w:grid="cols-2 sm:cols-3 lg:cols-4 xl:cols-5" w:gap="5 <sm:2" class="grid">
      <CharacterCard v-for="character in characters" :key="character.normalizedName" :character="character" />
    </div>
  </Container>
</template>
