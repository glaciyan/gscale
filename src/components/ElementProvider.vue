<script setup lang="ts">
import { IElement } from "~/lib/data/contracts/IElement";

const props = defineProps<{ element: IElement }>();

provide("element", props.element);
</script>

<template>
  <slot />
</template>
