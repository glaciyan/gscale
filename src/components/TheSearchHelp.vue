<script setup lang="ts">
import incrId from "~/lib/incrId";
import MockSearch from "./MockSearch.vue";

defineProps<{ search: string }>();
defineEmits(["click"]);

const terms = ["Ganyu", "Pyro", "Windwheel Aster", "Bow | Claymore"];
const id = incrId();
</script>

<template>
  <p class="text-light-normal">
    No results for "<span class="text-light-important">{{ search }} </span>"
  </p>
  <p class="mt-2">Try someting like:</p>
  <div class="space-y-2 my-2">
    <MockSearch v-for="term in terms" :key="term + id" :term="term" @click="$emit('click', $event)" />
  </div>
</template>
~/util/incrId