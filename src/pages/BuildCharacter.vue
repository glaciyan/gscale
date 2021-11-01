<script setup lang="ts">
import AscensionLevelSelector from "~/components/AscensionLevelSelector.vue";
import TheCharacterDetailPanel from "~/components/BuildCharacter/TheCharacterDetailPanel.vue";
import XLContainer from "~/components/XLContainer.vue";
import { getCharacterById } from "~/data/Characters";
import { ICharacter } from "~/data/contracts/ICharacter";
import { ascensionLevels } from "~/composites/ascensionLevels";
import Flex from "~/components/Flex.vue";
import title from "~/lib/title";
import { range } from "~/lib/range";
import CustomSelector from "~/components/CustomSelector.vue";

const route = useRoute();
const character = getCharacterById(route.params.character as string) ?? (getCharacterById("jeffrey") as ICharacter);

const { start: ascStart, goal: ascGoal } = ascensionLevels();

const nStart = ref(1);

useTitle(title(`Building ${character.name}`));
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
                        lg:(flex-grow-0) "
                >
                    <div class="text-light-important p-6">
                        <section>
                            <h2>Level</h2>
                            <Flex>
                                <AscensionLevelSelector id="level1" v-model:value="ascStart" />
                                <AscensionLevelSelector id="level2" v-model:value="ascGoal" />
                            </Flex>
                        </section>
                        <section>
                            <h2>Normal</h2>
                            <Flex>
                                <CustomSelector id="normal1" v-model="nStart" :listItems="range(10)">
                                    <template #button="{ value }">
                                        {{ value }}
                                    </template>
                                    <template #item="{ option }">
                                        {{ option }}
                                    </template>
                                </CustomSelector>
                            </Flex>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </XLContainer>
</template>

<style>
h2 {
    @apply font-semibold mb-2;
}
</style>
