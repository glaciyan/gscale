<script setup lang="ts">
import { ItemWithAmount } from "~/lib/types/ItemWithAmount";
import ItemCard from "./ItemCard.vue";
import incrId from "~/lib/incrId";

defineProps<{ items: ItemWithAmount[] }>();

const id = incrId();
</script>

<template>
  <ItemCard
    v-for="item in items"
    :key="item.item.normalizedName + id"
    v-tooltip="`${item.amount.toLocaleString()} ${item.item.name}`"
    :itemWithAmount="item"
  />
</template>
~/util/incrId