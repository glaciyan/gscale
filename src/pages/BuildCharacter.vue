<script setup lang="ts">
import AscensionLevelSelector from "~/components/AscensionLevelSelector.vue";
import TheCharacterDetailPanel from "~/components/BuildCharacter/TheCharacterDetailPanel.vue";
import XLContainer from "~/components/XLContainer.vue";
import { getCharacterById } from "~/data/Characters";
import { ICharacter } from "~/data/contracts/ICharacter";
import { ascensionLevels } from "~/composites/ascensionLevels";

const route = useRoute();
const character = getCharacterById(route.params.character as string) ?? (getCharacterById("jeffrey") as ICharacter);

const { start: ascStart, goal: ascGoal } = ascensionLevels();

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
                        bg-dark-600
                        text-dark-50
                        buildpagepadding
                        sm:(w-[20rem]
                        border-dark-200 border-r-2)
                        lg:(flex-grow-0)
                    "
                >
                    <section>
                        <h2 class="font-semibold text-light-100">Level</h2>
                        <div class="flex">
                            <AscensionLevelSelector id="asc1" v-model:value="ascStart" />
                            <AscensionLevelSelector id="asc2" v-model:value="ascGoal" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </XLContainer>
</template>
