<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useIntersection } from "../../composites/useIntersection";
import RarityStars from "../RarityStars.vue";
import Image from "../GImage.vue";
import { IBaseCharacter } from "~/lib/data/contracts/IBaseCharacter";

const props = defineProps<{
  character: IBaseCharacter;
}>();

const elementTextColor = `text-genshin-element-${props.character.element.normalizedName}`;
const hoverRingColor = `ring-genshin-element-${props.character.element.normalizedName}`;

const image = ref(null);

const isVisible = useIntersection(image);
</script>

<template>
  <div :class="['shadow-md transition-shadow hover:ring focus-within:ring rounded-md overflow-hidden', hoverRingColor]">
    <RouterLink :to="`/build/${character.normalizedName}`" draggable="false" :title="character.name">
      <div ref="image" class="bg-dark-600 relative aspect-w-8 aspect-h-5">
        <Image
          v-if="isVisible"
          class="h-full w-full"
          type="characterCard"
          :entity="character"
          width="240"
          height="150"
        />
      </div>
      <div class="bg-dark-400 leading-snug py-3 px-4 <sm:(py-2 px-3) ">
        <div class="flex flex-wrap flex-row items-center <sm:(flex-col-reverse items-start -mb-0.5) ">
          <div class="mr-1">
            <span :class="elementTextColor">{{ character.element.name }}</span>
            {{ " " }}
            <span class="text-dark-50">{{ character.weaponType.name }}</span>
          </div>
          <RarityStars :rarity="character.rarity" />
        </div>
        <span class="font-medium text-white text-lg <sm:(text-base) hover:underline">
          {{ character.name }}
        </span>
      </div>
    </RouterLink>
  </div>
</template>
