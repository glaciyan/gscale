<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
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
    touch?: boolean;
}>();

const elementTextColor = `text-genshin-element-${props.elementId}`;
const hoverRingColor = `ring-genshin-element-${props.elementId}`;

const image = ref(null);

// TODO move this in a Picture component
const isVisible = useIntersection(image);
</script>

<template>
    <div
        :class="[
            'shadow-md w-max transition-shadow hover:ring focus-within:ring rounded-md overflow-hidden',
            hoverRingColor,
        ]"
    >
        <RouterLink :to="buildUrl" draggable="false">
            <!-- TODO temp make image component -->
            <div class="bg-gray-700 h-[150px] w-[240px] relative" ref="image">
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
            <div class="bg-gray-600 py-3 px-4">
                <div class="flex flex-wrap space-x-1 items-center">
                    <span :class="elementTextColor">{{ element }}</span>
                    <span class="text-gray-200">{{ weaponType }}</span>
                    <RarityStars :rarity="rarity" />
                </div>
                <span class="font-medium text-white text-lg hover:underline">
                    {{ name }}
                </span>
            </div>
        </RouterLink>
    </div>
</template>
