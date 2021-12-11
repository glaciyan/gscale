<script setup lang="ts">
import { ItemWithAmount } from "~/lib/data/entities/ItemWithAmount";
import ItemListHeader from "./ItemListHeader.vue";
import ItemList from "./ItemList.vue";
import type { Component } from "vue";

defineProps<{ items: ItemWithAmount[]; title: string; icon: Component; noResize?: boolean }>();
</script>

<template>
  <ItemListHeader v-if="items.length" :title="title">
    <template #icon>
      <component :is="icon" :class="['text-light-ternary', { 'h-5 w-5': !noResize }]" />
    </template>
    <template #itemList>
      <ItemList :items="items" />
    </template>
  </ItemListHeader>
</template>
