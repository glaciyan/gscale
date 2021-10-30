<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useElementTextColor } from "../../composites/elementTextColor";
import { useIntersection } from "../../composites/useIntersection";
import RarityStars from "../RarityStars.vue";

const props = defineProps<{
    name: string;
    element: string;
    elementId: string;
    weaponType: string;
    rarity: 4 | 5;
    cardUrl: string;
    buildUrl: string;
}>();

const elementTextColor = useElementTextColor(props.elementId);
const hoverRingColor = `ring-genshin-element-${props.elementId}`;

const image = ref(null);

// TODO move this in a Picture component
const isVisible = useIntersection(image);
</script>

<template>
    <div
        :class="['shadow-md transition-shadow hover:ring focus-within:ring rounded-md overflow-hidden', hoverRingColor]"
    >
        <RouterLink :to="buildUrl" draggable="false">
            <!-- TODO temp make image component -->
            <div class="flex bg-dark-700 relative items-center justify-center aspect-w-8 aspect-h-5" ref="image">
                <img
                    v-if="isVisible"
                    :src="cardUrl"
                    :alt="`${name}`"
                    decoding="async"
                    loading="lazy"
                    draggable="false"
                    width="240"
                    height="150"
                />
            </div>
            <div class="bg-dark-400 leading-snug py-3 px-4 <sm:(py-2 px-3)">
                <div class="flex flex-wrap flex-row items-center <sm:(flex-col-reverse items-start -mb-0.5)">
                    <div class="mr-1">
                        <span :class="elementTextColor">{{ element }}</span>
                        {{ " " }}
                        <span class="text-dark-100">{{ weaponType }}</span>
                    </div>
                    <RarityStars :rarity="rarity" />
                </div>
                <span class="font-medium text-white text-lg <sm:(text-base) hover:underline">
                    {{ name }}
                </span>
            </div>
        </RouterLink>
    </div>
</template>
