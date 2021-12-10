<script setup lang="ts">
import { ItemWithAmount } from "~/lib/data/entities/ItemWithAmount";
import ItemCard from "./ItemCard.vue";
import incrId from "~/lib/incrId";

defineProps<{ items: ItemWithAmount[] }>();

const id = incrId();
</script>

<template>
  <ItemCard v-for="item in items" :key="item.item.normalizedName + id" :itemWithAmount="item" />
</template>
