<script setup lang="ts">
import { onBeforeMount } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import TheLeftPanel from "../components/BuildCharacter/TheLeftPanel.vue";
import XLContainer from "../components/XLContainer.vue";
import { getCharacterById } from "../data/Characters";
import { ICharacter } from "../data/contracts/ICharacter";

const route = useRoute();
const character = getCharacterById(route.params.character as string) ?? (getCharacterById("jeffrey") as ICharacter);

onBeforeMount(() => {
    document.title = `Building ${character.name} - GScale`;
});
</script>

<template>
    <XLContainer>
        <div class="w-full lg:flex lg:h-[51.5rem]">
            <div class="flex <sm:block">
                <TheLeftPanel :character="character" />
            </div>
        </div>
    </XLContainer>
</template>
