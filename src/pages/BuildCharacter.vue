<script setup lang="ts">
import TheCharacterDetailPanel from "~/components/BuildCharacter/TheCharacterDetailPanel.vue";
import SelectorAscensionLevel from "~/components/SelectorAscensionLevel.vue";
import Titled from "~/components/Titled.vue";
import SelectorTalentLevel from "~/components/SelectorTalentLevel.vue";
import XLContainer from "~/components/XLContainer.vue";
import { useAscensionLevelRange } from "~/composites/useAscensionLevelRange";
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
                        lg:(flex-grow-0)
                    "
                >
                    <div class="p-6">
                        <div class="space-y-6">
                            <Titled title="Level">
                                <SelectorAscensionLevel class="rounded-l-md" id="level1" v-model="ascStart" />
                                <SelectorAscensionLevel cbClass="rounded-r-md" id="level2" v-model="ascGoal" />
                            </Titled>
                            <Titled title="Normal Attack">
                                <SelectorTalentLevel id="normal1" v-model="normalStart" />
                                <SelectorTalentLevel id="normal2" v-model="normalGoal" />
                            </Titled>
                            <Titled title="Elemental Attack">
                                <SelectorTalentLevel id="em1" v-model="emStart" />
                                <SelectorTalentLevel id="em2" v-model="emGoal" />
                            </Titled>
                            <Titled title="Burst">
                                <SelectorTalentLevel id="burst1" v-model="burstStart" />
                                <SelectorTalentLevel id="burst2" v-model="burstGoal" />
                            </Titled>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </XLContainer>
</template>
