<script setup lang="ts">
import TheCharacterDetailPanel from "~/components/BuildCharacter/TheCharacterDetailPanel.vue";
import ElementalIcon from "~/components/icons/Elemental.vue";
import FireIcon from "~/components/icons/Fire.vue";
import GrowthIcon from "~/components/icons/Growth.vue";
import SwordIcon from "~/components/icons/Sword.vue";
import SelectorAscensionLevel from "~/components/SelectorAscensionLevel.vue";
import SelectorIconSeperator from "~/components/SelectorIconSeperator.vue";
import SelectorTalentLevel from "~/components/SelectorTalentLevel.vue";
import TitledSelectorGroup from "~/components/TitledSelectorGroup.vue";
import XLContainer from "~/components/container/XLContainer.vue";
import { useAscensionLevelRange } from "~/composites/useAscensionLevelRange";
import { useTalentLevelRange } from "~/composites/useTalentLevelRange";
import { getCharacterById } from "~/data/Characters";
import { ICharacter } from "~/data/contracts/ICharacter";
import title from "~/lib/title";

const route = useRoute();

// TODO temp
function getTraveler(element: string) {
    return getCharacterById("jeffrey") as ICharacter;
}

const character = route.params.travelerElement
    ? getTraveler(route.params.travelerElement as string)
    : getCharacterById(route.params.character as string) ?? (getCharacterById("jeffrey") as ICharacter);

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
                <section
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
                            <!-- Level -->
                            <TitledSelectorGroup title="Level">
                                <SelectorAscensionLevel class="rounded-l-md" id="level1" v-model="ascStart" />
                                <SelectorIconSeperator :element="character.element.normalizedName">
                                    <GrowthIcon class="-m-0.5" />
                                </SelectorIconSeperator>
                                <SelectorAscensionLevel cbClass="rounded-r-md" id="level2" v-model="ascGoal" />
                            </TitledSelectorGroup>

                            <!-- Normal -->
                            <TitledSelectorGroup title="Normal Attack">
                                <SelectorTalentLevel class="rounded-l-md" id="normal1" v-model="normalStart" />
                                <SelectorIconSeperator :element="character.element.normalizedName">
                                    <SwordIcon class="h-[26px] -m-0.5 w-[26px]" />
                                </SelectorIconSeperator>
                                <SelectorTalentLevel class="rounded-r-md" id="normal2" v-model="normalGoal" />
                            </TitledSelectorGroup>

                            <!-- Elemental -->
                            <TitledSelectorGroup title="Elemental Attack">
                                <SelectorTalentLevel class="rounded-l-md" id="em1" v-model="emStart" />
                                <SelectorIconSeperator :element="character.element.normalizedName">
                                    <ElementalIcon class="-m-0.5" />
                                </SelectorIconSeperator>
                                <SelectorTalentLevel class="rounded-r-md" id="em2" v-model="emGoal" />
                            </TitledSelectorGroup>

                            <!-- Burst -->
                            <TitledSelectorGroup title="Burst">
                                <SelectorTalentLevel class="rounded-l-md" id="burst1" v-model="burstStart" />
                                <SelectorIconSeperator :element="character.element.normalizedName">
                                    <FireIcon class="-m-0.5" />
                                </SelectorIconSeperator>
                                <SelectorTalentLevel class="rounded-r-md" id="burst2" v-model="burstGoal" />
                            </TitledSelectorGroup>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </XLContainer>
</template>
