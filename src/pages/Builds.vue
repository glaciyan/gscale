<script setup lang="ts">
import { db } from "~/lib/offlineDatabase/db";
import CharacterBuildPreview from "~/components/character/CharacterBuildPreview.vue";
import { Build } from "~/lib/offlineDatabase/db";
import Container from "../components/Container.vue";

const builds = ref<Build[]>();

const getBuilds = async () => {
  builds.value = await db.builds.toArray();
};

onBeforeMount(() => {
  getBuilds();
});
</script>

<template>
  <Container size="2xl">
    <div w:grid="gap-5 cols-2 <sm:cols-1" class="grid">
      <CharacterBuildPreview v-for="build in builds" :build="build" />
    </div>
  </Container>
</template>
