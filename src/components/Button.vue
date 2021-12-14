<script setup lang="ts">
import Spinner from "./GSpinner.vue";
import Center from "./Center.vue";
import { IElement } from "~/lib/data/contracts/IElement";
import { ComputedRef } from "vue";

const injectedElement = inject("element") as ComputedRef<IElement>;

const props = withDefaults(
  defineProps<{
    element?: string;
    look?: "solid" | "outline" | "ghost";
    isLoading?: boolean;
    disabled?: boolean;
  }>(),
  {
    element: undefined,
    look: "solid",
    isLoading: false,
    disabled: false,
  }
);

const _disabled = computed(() => props.isLoading || props.disabled);

const element = computed(() => props.element ?? injectedElement.value.normalizedName);

const buttonStyle = computed(() => {
  switch (props.look) {
    case "solid":
      return `bg-genshin-element-${element.value} transition-colors hover:bg-opacity-70 active:bg-opacity-50 text-black font-semibold shadow-md`;
    case "outline":
      return `border-1 border-genshin-element-${element.value} text-genshin-element-${element.value} bg-dark-900 transition-colors bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-40`;
    case "ghost":
      return `text-genshin-element-${element.value} bg-dark-900 transition-colors bg-opacity-0 hover:bg-opacity-20 active:bg-opacity-40`;
  }
});
</script>

<template>
  <button
    type="button"
    :class="[buttonStyle, 'focus:outline-none focus-visible:ring h-[42px] px-4 rounded-lg ']"
    :disabled="_disabled"
    :aria-disabled="_disabled"
  >
    <Center>
      <Spinner v-if="isLoading" class="absolute" />
      <span :class="{ 'opacity-0': isLoading }">
        <slot />
      </span>
    </Center>
  </button>
</template>
