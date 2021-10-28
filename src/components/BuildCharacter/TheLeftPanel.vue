<script setup lang="ts">
import { useElementTextColor } from "../../composites/elementTextColor";
import { ICharacter } from "../../data/contracts/ICharacter";
import CharacterPortrait from "../character/CharacterPortrait.vue";
import ElementIcon from "../icons/ElementIcon.vue";
import SwordIcon from "../icons/SwordIcon.vue";
import IconWithText from "../IconWithText.vue";
import TheClampedText from "../TheClampedText.vue";

const props = defineProps<{ character: ICharacter }>();
const elementTextColor = useElementTextColor(props.character.element.normalizedName);
</script>

<template>
    <div class="flex flex-col h-full bg-gray-700 p-6 relative">
        <div aria-hidden="true" class="h-32 w-full opacity-50 inset-x-0 top-0 z-10 absolute">
            <img
                class="h-full object-cover w-full"
                :src="`/images/characters/card/${character.normalizedName}.webp`"
                width="240"
                height="150"
                draggable="false"
            />
        </div>
        <CharacterPortrait
            class="ring mb-6 ring-gray-700 z-20"
            :normalizedName="character.normalizedName"
            :rarity="character.rarity"
        />
        <!-- Character details -->
        <div>
            <p class="font-bold">{{ character.name }}</p>
            <p class="text-gray-100">{{ character.constellation }}</p>
            <TheClampedText class="mt-1 text-sm text-gray-200 leading-4 block sm:w-64">
                {{ character.description }}
            </TheClampedText>
        </div>
        <div class="space-y-1 my-6">
            <IconWithText>
                <template #icon>
                    <ElementIcon class="text-gray-300" />
                </template>
                <template #default>
                    <p :class="elementTextColor">{{ character.element.name }}</p>
                </template>
            </IconWithText>
            <IconWithText>
                <template #icon><SwordIcon class="text-gray-300 self-start" /></template>
                <template #default>
                    <div class="text-gray-100">
                        <div>{{ character.weaponType.name }}<br />{{ character.sub }}</div>
                    </div>
                </template>
            </IconWithText>
        </div>
    </div>
</template>
