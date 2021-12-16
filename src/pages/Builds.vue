<script setup lang="ts">
import { db } from "~/lib/offlineDatabase/db";
import CharacterBuildPreview from "~/components/character/CharacterBuildPreview.vue";
import { Build } from "~/lib/offlineDatabase/db";
import Container from "../components/PageContainer";
import GLink from "~/components/GLink";
import Button from "~/components/Button.vue";
import Center from "../components/Center.vue";
import useRandomElement from "~/composites/useRandomElement";

const { element, pickNew: newElement } = useRandomElement();

const ready = ref(false);

const builds = ref<Build[]>();
const totalBuilds = ref(0);

const getBuilds = async () => {
  const buildsFromDb = await db.builds.toArray();
  builds.value = buildsFromDb;
  totalBuilds.value = buildsFromDb.length;
  ready.value = true;
};

onBeforeMount(() => {
  getBuilds();
  newElement();
});

const hasBuilds = computed(() => totalBuilds.value > 0);

const handleBuildDelete = () => {
  if (totalBuilds.value <= 1) {
    window.scrollTo({ top: 0 });
  }

  totalBuilds.value--;
};
</script>

<template>
  <Container v-if="ready" size="2xl">
    <div v-if="hasBuilds" w:grid="gap-5 cols-2 <sm:cols-1" class="grid">
      <CharacterBuildPreview v-for="build in builds" :key="build.id" :build="build" @deleted="handleBuildDelete" />
    </div>
    <Center v-else>
      <div class="rounded-lg flex flex-col bg-dark-400 shadow-md w-max py-4 px-6 items-center justify-center">
        <div class="m-2 text-6xl">?</div>
        <p>You don't have any builds.</p>
        <GLink to="/" isRouter><Button :element="element" class="mt-2">Create one</Button></GLink>
      </div>
    </Center>
  </Container>
</template>
