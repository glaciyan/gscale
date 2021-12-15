<script setup lang="ts">
import { ItemWithAmount } from "~/lib/types/ItemWithAmount";
import incrId from "~/lib/incrId";
import ItemCheckState from "~/lib/item/ItemCheckState";
import ItemCardClickable from "./ItemCardClickable.vue";

const props = defineProps<{ items: ItemWithAmount[]; checkedOff: ItemWithAmount[] }>();
defineEmits(["itemClick"]);

const id = incrId();

const getState = (item: ItemWithAmount): ItemCheckState => {
  const fromChecklist = props.checkedOff.find((i) => i.item.normalizedName === item.item.normalizedName);

  if (!fromChecklist || fromChecklist?.amount === 0) {
    return ItemCheckState.None;
  } else if (fromChecklist.amount >= item.amount) {
    return ItemCheckState.Done;
  } else {
    return ItemCheckState.Partial;
  }
};
</script>

<template>
  <ItemCardClickable
    v-for="item in items"
    :key="item.item.normalizedName + id"
    :itemWithAmount="item"
    :state="getState(item)"
    @click="$emit('itemClick', item, $event)"
  />
</template>
