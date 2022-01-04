<script setup lang="ts">
import ItemCard from "./ItemCard.vue";
import { ItemWithAmount } from "~/lib/types/ItemWithAmount";
import CheckIcon from "./icons/CheckIcon.vue";
import FillAmount, { FillState } from "~/lib/item/FillAmount";

const props = defineProps<{ item: ItemWithAmount; fillAmount: FillAmount }>();
defineEmits(["click"]);

const done = computed(() => props.fillAmount.state === FillState.Done);
const partial = computed(() => props.fillAmount.state === FillState.Partial);

const tooltip = computed(() => {
  if (done.value) {
    return `${props.item.amount.toLocaleString()} ${props.item.item.name}`;
  } else if (partial.value) {
    return `${props.fillAmount.amount.toLocaleString()}/${props.item.amount.toLocaleString()} ${props.item.item.name}`;
  } else {
    return `${props.item.amount.toLocaleString()} ${props.item.item.name}`;
  }
});
</script>

<template>
  <div v-tooltip="tooltip" class="cursor-pointer m-1 relative select-none" @click="$emit('click', fillAmount)">
    <ItemCard :itemWithAmount="item" :grayscale="done" class="!m-0" />
    <div
      :class="[
        'ring-inset hover:ring-2 transition-all absolute inset-0 rounded-md ring-green-400 flex items-center justify-center',
        { 'ring !hover:ring bg-black/30 text-green-400': done },
        { 'ring-2 hover:(ring-green-400) ring-yellow-200': partial },
      ]"
    >
      <CheckIcon v-if="done" />
    </div>
  </div>
</template>
