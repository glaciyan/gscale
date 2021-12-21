<script setup lang="ts">
import GButton from "./GButton";
import { useElementContext } from "~/composites/useElementContext";

const injectedElement = useElementContext();

const props = withDefaults(
  defineProps<{
    element?: string;
    look?: "solid" | "outline" | "ghost";
  }>(),
  {
    element: undefined,
    look: "solid",
  }
);

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
  <GButton :bStyle="buttonStyle">
    <slot />
  </GButton>
</template>
