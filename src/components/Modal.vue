<script setup lang="ts">
import PopOver from "./PopOver.vue";
import EButton from "./ElementButton.vue";

withDefaults(defineProps<{ isOpen: boolean; header: string; question?: string; closeText: string }>(), {
  question: undefined,
  closeText: "Close",
});
defineEmits(["close"]);
</script>

<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
});
</script>

<template>
  <teleport to="#modal">
    <PopOver
      :open="isOpen"
      backdropClass="fixed inset-0 bg-dark-900/80"
      shellClass="fixed inset-0 flex items-center justify-center"
      transition="fade-slow"
      @close="$emit('close')"
    >
      <div :class="['rounded-md bg-dark-400 shadow-md mx-1 min-w-60 overflow-hidden', $attrs.class]">
        <div class="p-6">
          <p class="font-bold text-light-important mb-1">{{ header }}</p>
          <div class="text-light-normal">
            <slot />
          </div>
        </div>
        <div class="flex bg-dark-600 border-t-2 border-dark-200 py-3 px-6 justify-end items-center">
          <div v-if="question" class="flex-1 mr-12 text-light-normal">{{ question }}</div>
          <div class="flex flex-row-reverse">
            <slot name="buttons" />
            <EButton element="neutral" look="ghost" class="mr-2" @click="$emit('close')">
              {{ closeText }}
            </EButton>
          </div>
        </div>
      </div>
    </PopOver>
  </teleport>
</template>
