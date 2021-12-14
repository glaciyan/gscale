<script setup lang="ts">
import { ComputedRef } from "vue";
import { IElement } from "~/lib/data/contracts/IElement";
import Center from "../Center.vue";
const props = defineProps<{ element?: string }>();

const element = inject("element") as ComputedRef<IElement>;

const backgroundColor = computed(() => `bg-genshin-element-${props.element ?? element.value.normalizedName}-dark`);
</script>

<template>
  <Center
    aria-hidden="true"
    :class="['px-2 border-l-2 border-r-2 border-dark-800 bg-opacity-40 text-light-important', backgroundColor]"
  >
    <slot />
  </Center>
</template>
