<script setup lang="ts">
import RarityStars from "../RarityStars.vue";
import { RouterLink } from "vue-router";

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
const hoverColor = `ring-genshin-element-${props.elementId}`;
</script>

<template>
    <div
        :class="[
            'rounded-md shadow-md w-max transition-shadow overflow-hidden hover:ring',
            hoverColor,
        ]"
    >
        <div class="bg-gray-700">
            <img :src="cardUrl" :alt="`Image of ${name}`" width="240" height="150" />
        </div>
        <div class="bg-gray-600 py-3 px-4">
            <div class="flex flex-wrap space-x-1 items-center">
                <span :class="elementTextColor">{{ element }}</span>
                <span class="text-gray-200">{{ weaponType }}</span>
                <RarityStars :rarity="rarity" />
            </div>
            <h3 class="font-medium text-white text-lg w-max hover:underline">
                <RouterLink :to="buildUrl">
                    {{ name }}
                </RouterLink>
            </h3>
        </div>
    </div>
</template>
