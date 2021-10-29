<script setup lang="ts">
import { getCharacterById } from "~/data/Characters";
import { ICharacter } from "~/data/contracts/ICharacter";
import TheCharacterDetailPanel from "~/components/BuildCharacter/TheCharacterDetailPanel.vue";
import XLContainer from "~/components/XLContainer.vue";

const route = useRoute();
const character = getCharacterById(route.params.character as string) ?? (getCharacterById("jeffrey") as ICharacter);

useTitle(`Building ${character.name} - GScale`);
</script>

<template>
    <XLContainer>
        <div class="w-full lg:flex lg:h-[51.5rem]">
            <div class="flex <sm:block">
                <TheCharacterDetailPanel :character="character" />
                <div
                    class="
                        flex flex-col flex-grow
                        space-y-6
                        bg-gray-600
                        text-gray-100
                        buildpagepadding
                        sm:(w-[20rem]
                        border-gray-300 border-r-2)
                        lg:(flex-grow-0)
                    "
                ></div>
            </div>
        </div>
    </XLContainer>
</template>
