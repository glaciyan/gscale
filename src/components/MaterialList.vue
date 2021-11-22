<script setup lang="ts">
import { IItemWithAmountNotNull } from "~/lib/data/entities/ItemWithAmount";
import ItemCard from "./ItemCard.vue";
import { getMaterialImage } from "~/lib/data/util/getMaterialImage";

defineProps<{ items: IItemWithAmountNotNull[]; key: string }>();
</script>

<template>
  <ItemCard
    v-for="item in items"
    :key="item.item.normalizedName + key"
    :imageTitle="item.item.name"
    :amount="item.amount"
    :imageUrl="getMaterialImage(item.item.normalizedName).webp"
  />
</template>
