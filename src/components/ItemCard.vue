<script setup lang="ts">
import { ItemWithAmount } from "~/lib/types/ItemWithAmount";
import millify from "~/lib/millify";
import Image from "./GImage.vue";

const props = defineProps<{ itemWithAmount: ItemWithAmount; grayscale?: boolean }>();

const amount = computed(() => millify(props.itemWithAmount.amount));
</script>

<template>
  <div class="rounded flex flex-col bg-dark-400 m-1 shadow w-max items-center overflow-hidden">
    <div class="h-12 p-1 w-12">
      <Image
        :class="['h-full object-contain w-full', { 'filter grayscale': grayscale }]"
        type="item"
        :name="itemWithAmount.item.normalizedName"
        width="40"
        height="40"
        :alt="itemWithAmount.item.name"
        :title="itemWithAmount.item.name"
      />
    </div>
    <div class="bg-dark-300 text-center w-full px-1" :title="itemWithAmount.amount.toLocaleString()">{{ amount }}</div>
  </div>
</template>
