<script setup lang="ts">
import millify from "~/lib/millify";

const props = defineProps<{ imageUrl: string; imageTitle: string; amount: number }>();
const _amountLabel = computed(() => millify(props.amount));
</script>

<template>
  <div class="rounded flex flex-col bg-dark-400 m-1 shadow w-max items-center overflow-hidden">
    <div class="h-12 p-1 w-12">
      <img
        class="h-full object-contain w-full"
        :alt="imageTitle"
        :title="imageTitle"
        width="40"
        height="40"
        :src="imageUrl"
      />
    </div>
    <div class="bg-dark-300 text-center w-full px-1">{{ _amountLabel }}</div>
  </div>
</template>
