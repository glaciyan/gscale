<script setup lang="ts">
import ItemCard from "./ItemCard.vue";
import { ItemWithAmount } from "~/lib/data/entities/ItemWithAmount";

defineProps<{ itemWithAmount: ItemWithAmount; checked: boolean }>();
defineEmits(["click"]);
</script>

<template>
  <div class="cursor-pointer m-1" @click="$emit('click')">
    <ItemCard :itemWithAmount="itemWithAmount" class="!m-0" />
  </div>
</template>
