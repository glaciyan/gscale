<script setup lang="ts">
import RarityStars from "../RarityStars.vue";

const props = defineProps<{ normalizedName: string; rarity?: 4 | 5 }>();
const mugshotRounding = ["rounded-t-md", { "rounded-b-md": props.rarity === undefined }];
</script>

<template>
    <div class="rounded-md bg-gray-600 w-[100px]">
        <div :class="['bg-gray-600 aspect-w-1 aspect-h-1', mugshotRounding]">
            <img
                :class="mugshotRounding"
                :src="`/images/characters/mugshot/${normalizedName}.webp`"
                width="100"
                height="100"
            />
        </div>
        <div v-if="rarity" class="rounded-b-md flex bg-gray-500 border-0 py-0.5 items-center justify-center">
            <RarityStars :rarity="rarity" />
        </div>
    </div>
</template>
