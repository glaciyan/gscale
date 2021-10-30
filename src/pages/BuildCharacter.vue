<script setup lang="ts">
import AscensionLevelSelector from "~/components/AscensionLevelSelector.vue";
import TheCharacterDetailPanel from "~/components/BuildCharacter/TheCharacterDetailPanel.vue";
import XLContainer from "~/components/XLContainer.vue";
import { getCharacterById } from "~/data/Characters";
import { ICharacter } from "~/data/contracts/ICharacter";
import { AscensionLevel } from "~/interfaces/AscensionLevel";

const route = useRoute();
const character = getCharacterById(route.params.character as string) ?? (getCharacterById("jeffrey") as ICharacter);

useTitle(`Building ${character.name} - GScale`);

const starting = ref<AscensionLevel>({ level: 20, ascended: false });

watch(starting, () => {
    console.log(JSON.stringify(starting.value));
});
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
                        text-dark-100
                        buildpagepadding
                        sm:(w-[20rem]
                        border-dark-300 border-r-2)
                        lg:(flex-grow-0) "
                >
                    <AscensionLevelSelector checkboxId="asc1" v-model:value="starting"></AscensionLevelSelector>
                </div>
            </div>
        </div>
    </XLContainer>
</template>
