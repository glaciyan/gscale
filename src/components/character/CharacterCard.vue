<script setup lang="ts">
import RarityStars from "../RarityStars.vue";
import { RouterLink } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import { Ref, ref } from "vue";
import { useIntersection } from "../../composites/useIntersection";

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

const card = ref(null);

const intersecting = useIntersection(card);
</script>

<template>
    <div
        :class="[
            'rounded-md shadow-md w-max transition-shadow overflow-hidden hover:ring',
            hoverColor,
        ]"
    >
        <div class="bg-gray-700 h-[150px] w-[240px]" ref="card">
            <img
                v-if="intersecting"
                :src="cardUrl"
                :alt="`Image of ${name}`"
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
            <h3 class="font-medium text-white text-lg w-max hover:underline">
                <RouterLink :to="buildUrl">
                    {{ name }}
                </RouterLink>
            </h3>
        </div>
    </div>
</template>
