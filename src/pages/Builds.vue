<script setup lang="ts">
import { db } from "~/lib/offlineDatabase/db";
import CharacterBuildPreview from "~/components/character/CharacterBuildPreview.vue";
import { Build } from "~/lib/offlineDatabase/db";
import Container from "../components/PageContainer";
import GLink from "~/components/GLink";
import Button from "~/components/Button.vue";
import Center from "../components/Center.vue";
import useRandomElement from "~/composites/useRandomElement";
import repo from "~/lib/data/repository/GenshinDataRepository";
import totalBuildItems from "~/lib/item/totalBuildItems";

const { element, pickNew: newElement } = useRandomElement();

const ready = ref(false);

const buildsData = ref<Build[]>();
const totalBuilds = ref(0);

const builds = computed(() =>
  buildsData.value
    ? buildsData.value.map((build) => {
        const character = repo.needCharacter(build.entityId);
        const total = totalBuildItems(character, build);

        return {
          character,
          total,
          data: build,
        };
      })
    : []
);

const getBuilds = async () => {
  const buildsFromDb = await db.builds.where("type").equals("character").toArray();
  buildsData.value = buildsFromDb;
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
  <Container v-if="builds !== null" size="2xl">
    <div v-if="hasBuilds" w:grid="gap-5 cols-2 <sm:cols-1" class="grid">
      <CharacterBuildPreview
        v-for="build in builds"
        :key="build.data.id"
        :character="build.character"
        :total="build.total.value"
        :data="build.data"
        @deleted="handleBuildDelete"
      />
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
