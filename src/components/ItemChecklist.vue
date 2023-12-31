<script setup lang="ts">
import { ItemWithAmount } from "~/lib/types/ItemWithAmount";
import incrId from "~/lib/incrId";
import ItemCardClickable from "./ItemCardClickable.vue";
import FillAmount, { FillState } from "~/lib/item/FillAmount";

const props = defineProps<{ items: ItemWithAmount[]; checkedOff: ItemWithAmount[] }>();
defineEmits(["itemClick"]);

const id = incrId();

const getState = (item: ItemWithAmount): FillAmount => {
  const fromChecklist = props.checkedOff.find((i) => i.item.normalizedName === item.item.normalizedName);

  if (!fromChecklist || fromChecklist?.amount === 0) {
    return { state: FillState.None, amount: 0 };
  } else if (fromChecklist.amount >= item.amount) {
    return { state: FillState.Done, amount: fromChecklist.amount };
  } else {
    return { state: FillState.Partial, amount: fromChecklist.amount };
  }
};
</script>

<template>
  <ItemCardClickable
    v-for="item in items"
    :key="item.item.normalizedName + id"
    :item="item"
    :fillAmount="getState(item)"
    @click="$emit('itemClick', item, $event)"
  />
</template>
~/util/incrId~/model/FillAmount