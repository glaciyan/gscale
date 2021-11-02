<script setup lang="ts">
import TheCharacterDetailPanel from "~/components/BuildCharacter/TheCharacterDetailPanel.vue";
import AscensionLevelSelector from "~/components/SelectorAscensionLevel.vue";
import SelectorGroup from "~/components/SelectorGroup.vue";
import SelectorTalentLevel from "~/components/SelectorTalentLevel.vue";
import XLContainer from "~/components/XLContainer.vue";
import { useAscensionLevelRange } from "~/composites/ascensionLevels";
import { useTalentLevelRange } from "~/composites/useTalentLevelRange";
import { getCharacterById } from "~/data/Characters";
import { ICharacter } from "~/data/contracts/ICharacter";
import title from "~/lib/title";

const route = useRoute();
const character = getCharacterById(route.params.character as string) ?? (getCharacterById("jeffrey") as ICharacter);

useTitle(title(`Building ${character.name}`));

const { start: ascStart, goal: ascGoal } = useAscensionLevelRange();
const { start: normalStart, goal: normalGoal } = useTalentLevelRange();
const { start: emStart, goal: emGoal } = useTalentLevelRange();
const { start: burstStart, goal: burstGoal } = useTalentLevelRange();
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
                            <SelectorGroup title="Normal Attack">
                                <SelectorTalentLevel v-model="normalStart" />
                                <SelectorTalentLevel v-model="normalGoal" />
                            </SelectorGroup>
                            <SelectorGroup title="Elemental Attack">
                                <SelectorTalentLevel v-model="emStart" />
                                <SelectorTalentLevel v-model="emGoal" />
                            </SelectorGroup>
                            <SelectorGroup title="Burst">
                                <SelectorTalentLevel v-model="burstStart" />
                                <SelectorTalentLevel v-model="burstGoal" />
                            </SelectorGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </XLContainer>
</template>
