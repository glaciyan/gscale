<script setup lang="ts">
import TheCharacterDetailPanel from "~/components/BuildCharacter/TheCharacterDetailPanel.vue";
import AscensionLevelSelector from "~/components/SelectorAscensionLevel.vue";
import SelectorGroup from "~/components/SelectorGroup.vue";
import SelectorTalentLevel from "~/components/SelectorTalentLevel.vue";
import XLContainer from "~/components/XLContainer.vue";
import { ascensionLevels } from "~/composites/ascensionLevels";
import { getCharacterById } from "~/data/Characters";
import { ICharacter } from "~/data/contracts/ICharacter";
import title from "~/lib/title";

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
                        sm:(w-[20rem]
                        border-dark-200 border-r-2)
                        lg:(flex-grow-0) "
                >
                    <div class="p-6">
                        <div class="space-y-6">
                            <SelectorGroup title="Level">
                                <AscensionLevelSelector class="rounded-l-md" id="level1" v-model:value="ascStart" />
                                <AscensionLevelSelector cbClass="rounded-r-md" id="level2" v-model:value="ascGoal" />
                            </SelectorGroup>
                            <SelectorGroup title="Normal">
                                <SelectorTalentLevel v-model="nStart" />
                            </SelectorGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </XLContainer>
</template>
