<script setup lang="ts">
import { ItemWithAmount } from "~/lib/data/entities/ItemWithAmount";
import incrId from "~/lib/incrId";
import ItemCardChecklist from "./ItemCardChecklist.vue";

defineProps<{ items: ItemWithAmount[] }>();
defineEmits(["itemClick"]);

const id = incrId();
</script>

<template>
  <ItemCardChecklist
    v-for="item in items"
    :key="item.item.normalizedName + id"
    :itemWithAmount="item"
    :checked="false"
    @click="$emit('itemClick', item)"
  />
</template>
