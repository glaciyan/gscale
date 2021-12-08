<script setup lang="ts">
import { db } from "~/lib/offlineDatabase/db";

const builds = ref<string[]>([]);

const getBuilds = async () => {
  builds.value = (await db.builds.toArray()).map((build) => JSON.stringify(build, null, 2));
};

onBeforeMount(() => {
  getBuilds();
});
</script>

<template>
  <pre v-for="build in builds">{{ build }}</pre>
</template>
