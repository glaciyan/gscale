<script setup lang="ts">
import ElementIcon from "~/components/icons/ElementIcon.vue";
import SwordIcon from "~/components/icons/SwordIcon.vue";
import { IBaseCharacter } from "~/lib/data/contracts/IBaseCharacter";
import GPortrait from "../GPortrait.vue";
import IconWithText from "../IconWithText.vue";
import TheClampedText from "../TheClampedText.vue";
import Image from "../GImage.vue";
import warningText from "~/assets/speculatedWarningText";

const props = defineProps<{ character: IBaseCharacter }>();
const elementTextColor = computed(() => `text-genshin-element-${props.character.element.normalizedName}`);
</script>

<template>
  <aside class="flex flex-col bg-dark-700 px-6 pt-4 pb-6 relative">
    <div aria-hidden="true" class="h-32 w-full opacity-50 inset-x-0 top-0 absolute">
      <Image class="h-full object-cover w-full" type="characterCard" :entity="character" width="240" height="150" />
    </div>
    <div class="relative">
      <GPortrait class="ring mb-6 ring-dark-700" :character="character" />
      <!-- Character details -->
      <div>
        <div
          v-if="character.speculated"
          class="rounded-md bg-orange-500/10 border-2 border-orange-500/50 text-sm mb-2 p-2 sm:w-64"
        >
          <p class="font-bold mb-1 text-orange-400">Warning</p>
          <p class="text-orange-300">{{ warningText }}</p>
        </div>
        <p class="font-bold text-light-important">{{ character.name }}</p>
        <p>{{ character.constellation }}</p>
        <TheClampedText class="mt-1 text-sm text-light-ternary leading-4 block sm:w-64">
          {{ character.description }}
        </TheClampedText>
      </div>
      <div class="space-y-1 my-6">
        <IconWithText>
          <template #icon>
            <ElementIcon class="text-dark-100" />
          </template>
          <template #default>
            <p :class="elementTextColor">{{ character.element.name }}</p>
          </template>
        </IconWithText>
        <IconWithText>
          <template #icon>
            <SwordIcon class="text-dark-100 self-start" />
          </template>
          <template #default>
            <div class="text-dark-50">
              <div>{{ character.weaponType.name }}<br />{{ character.sub }}</div>
            </div>
          </template>
        </IconWithText>
      </div>
    </div>
  </aside>
</template>
