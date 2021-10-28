<script setup lang="ts">
import { onBeforeMount } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import CharacterPortrait from "../components/character/CharacterPortrait.vue";
import XLContainer from "../components/XLContainer.vue";
import { booleanToggle } from "../composites/booleanToggle";
import { getCharacterById } from "../data/Characters";
import { ICharacter } from "../data/contracts/ICharacter";

const route = useRoute();
const character = getCharacterById(route.params.character as string) ?? (getCharacterById("jeffrey") as ICharacter);

onBeforeMount(() => {
    document.title = `Building ${character.name} - GScale`;
});

const [clamp, toggleClamp] = booleanToggle(true);
</script>

<template>
    <XLContainer>
        <div class="w-full lg:flex lg:h-[51.5rem]">
            <!-- Details and Level selection -->
            <div class="flex <sm:block">
                <!-- Left detail panel -->
                <div class="flex flex-col h-full bg-gray-700 p-6 relative">
                    <div aria-hidden="true" class="h-32 w-full opacity-50 inset-x-0 top-0 z-10 absolute">
                        <img
                            class="h-full object-cover w-full"
                            :src="`/images/characters/card/${character.normalizedName}.webp`"
                            width="240"
                            height="150"
                        />
                    </div>
                    <CharacterPortrait
                        class="mb-6 z-20"
                        :normalizedName="character.normalizedName"
                        :rarity="character.rarity"
                    />
                    <!-- Character details -->
                    <div>
                        <p class="font-bold">{{ character.name }}</p>
                        <p class="text-gray-100">{{ character.constellation }}</p>
                        <p
                            @click="toggleClamp"
                            :class="['mt-1 text-sm text-gray-200 leading-4 block sm:w-64', { 'line-clamp-4': clamp }]"
                        >
                            {{ character.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </XLContainer>
</template>

<style>
.character-banner {
    position: relative;
}
.character-banner::before {
    @apply h-32 w-full opacity-50 inset-x-0 top-0 absolute;
    content: "";
    background-repeat: no-repeat;
    object-fit: cover;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    background-image: url("/images/characters/card/ganyu.webp");
}
</style>
