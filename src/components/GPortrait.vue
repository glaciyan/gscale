<script setup lang="ts">
import RarityStars from "./RarityStars.vue";
import Image from "./GImage.vue";
import { IBaseCharacter } from "~/lib/data/contracts/IBaseCharacter";

const props = defineProps<{ character: IBaseCharacter }>();
const rounding = ["rounded-t-md", { "rounded-b-md": props.character.rarity === undefined }];
</script>

<template>
  <div class="rounded-md h-max bg-dark-500 w-[100px]">
    <div :class="['bg-dark-500', rounding]">
      <Image :class="rounding" type="characterMugshot" :entity="character" width="100" height="100" />
    </div>
    <div v-if="character.rarity" class="rounded-b-md flex bg-dark-400 border-0 py-0.5 items-center justify-center">
      <RarityStars :rarity="character.rarity" />
    </div>
  </div>
</template>
