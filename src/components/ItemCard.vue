<script setup lang="ts">
import { ItemWithAmount } from "~/lib/data/entities/ItemWithAmount";
import millify from "~/lib/millify";
import Image from "./Image.vue";

const props = defineProps<{ itemWithAmount: ItemWithAmount }>();
const _amountLabel = computed(() => millify(props.itemWithAmount.amount));
</script>

<template>
  <div class="rounded flex flex-col bg-dark-400 m-1 shadow w-max items-center overflow-hidden">
    <div class="h-12 p-1 w-12">
      <Image
        class="h-full object-contain w-full"
        type="item"
        :name="itemWithAmount.item.normalizedName"
        width="40"
        height="40"
        :alt="itemWithAmount.item.name"
        :title="itemWithAmount.item.name"
      />
    </div>
    <div class="bg-dark-300 text-center w-full px-1">{{ _amountLabel }}</div>
  </div>
</template>
