<script setup lang="ts">
import RarityStars from "./RarityStars.vue";
import Image from "./GImage.vue";

const props = defineProps<{ normalizedName: string; rarity?: number; weapon?: boolean }>();
const rounding = ["rounded-t-md", { "rounded-b-md": props.rarity === undefined }];
</script>

<template>
  <div class="rounded-md bg-dark-500 w-[100px]">
    <div :class="['bg-dark-500', rounding]">
      <Image
        :class="[rounding, { '': weapon }]"
        :type="weapon ? 'weapon' : 'characterMugshot'"
        :name="normalizedName"
        width="100"
        height="100"
      />
    </div>
    <div v-if="rarity" class="rounded-b-md flex bg-dark-400 border-0 py-0.5 items-center justify-center">
      <RarityStars :rarity="rarity" />
    </div>
  </div>
</template>
