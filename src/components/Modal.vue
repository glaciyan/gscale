<script setup lang="ts">
import PopOver from "./PopOver.vue";
import Button from "./Button.vue";

withDefaults(
  defineProps<{ isOpen: boolean; header: string; content: string; question?: string; closeText: string }>(),
  {
    question: undefined,
    closeText: "Close",
  }
);
defineEmits(["close"]);
</script>

<template>
  <PopOver
    :open="isOpen"
    @close="$emit('close')"
    backdropClass="fixed inset-0 bg-dark-900/80 z-[990] flex items-center justify-center"
    transition="fade-slow"
  >
    <div class="rounded-md bg-dark-400 shadow-md mx-1 min-w-60 overflow-hidden">
      <div class="p-4">
        <p class="font-bold text-light-important mb-1">{{ header }}</p>
        <p class="text-light-normal">{{ content }}</p>
      </div>
      <div class="flex bg-dark-600 border-t-2 border-dark-200 py-3 px-6 justify-end items-center">
        <div v-if="question" class="flex-1 mr-12 text-light-normal">{{ question }}</div>
        <Button element="neutral" look="ghost" @click="$emit('close')" class="mr-2">
          {{ closeText }}
        </Button>
        <slot name="buttons" />
      </div>
    </div>
  </PopOver>
</template>
