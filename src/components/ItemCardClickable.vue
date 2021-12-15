<script setup lang="ts">
import ItemCard from "./ItemCard.vue";
import { ItemWithAmount } from "~/lib/types/ItemWithAmount";
import ItemCheckState from "~/lib/item/ItemCheckState";
import FireIcon from "./icons/FireIcon.vue";

const props = defineProps<{ itemWithAmount: ItemWithAmount; state: ItemCheckState }>();
defineEmits(["click"]);

const done = computed(() => props.state === ItemCheckState.Done);
const partial = computed(() => props.state === ItemCheckState.Partial);
</script>

<template>
  <div class="cursor-pointer m-1 relative select-none" :title="itemWithAmount.item.name" @click="$emit('click', state)">
    <div
      :class="[
        'ring-inset hover:ring-2 transition-all absolute inset-0 rounded-md ring-green-400 flex items-center justify-center',
        { 'ring !hover:ring bg-black/30 backdrop-filter backdrop-saturate-0 text-green-400': done },
        { 'ring-2 hover:(ring-green-400) ring-yellow-200': partial },
      ]"
    >
      <FireIcon v-if="done" />
    </div>
    <ItemCard :itemWithAmount="itemWithAmount" class="!m-0" />
  </div>
</template>
