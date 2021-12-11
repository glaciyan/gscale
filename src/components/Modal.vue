<script setup lang="ts">
import PopOver from "./PopOver.vue";
import Button from "./Button.vue";

withDefaults(
  defineProps<{ isOpen: boolean; header: string; content: string; question?: string; closeText: string }>(),
  {
    closeText: "Close",
  }
);
defineEmits(["close"]);
</script>

<template>
  <PopOver
    :open="isOpen"
    @close="$emit('close')"
    backdropClass="fixed inset-0 bg-dark-800/70 z-[990] flex items-center justify-center"
    class
  >
    <div class="rounded-md bg-dark-400 min-w-60 overflow-hidden">
      <div class="p-4">
        <p class="font-bold text-light-important mb-1">{{ header }}</p>
        <p class="text-light-normal">{{ content }}</p>
      </div>
      <div class="flex bg-dark-600 border-t-2 border-dark-300 py-3 px-6 justify-end items-center">
        <div v-if="question" class="flex-1 text-light-secondary mr-12">{{ question }}</div>
        <slot name="buttons" />
        <Button element="neutral" look="outline" @click="$emit('close')" class="ml-2">
          {{ closeText }}
        </Button>
      </div>
    </div>
  </PopOver>
</template>
