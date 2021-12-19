<script setup lang="ts">
import { UseFocusTrap } from "@vueuse/integrations/useFocusTrap/component";

defineProps<{ open: boolean; backdropClass?: string; shellClass?: string; transition?: string }>();
defineEmits(["close"]);

const shellVisible = ref(false);
</script>

<template>
  <div v-show="shellVisible" :class="backdropClass"></div>
  <transition :name="transition" @beforeEnter="shellVisible = true" @afterLeave="shellVisible = false">
    <UseFocusTrap v-if="open" :class="shellClass" @keydown.esc="$emit('close')" @click.self="$emit('close')">
      <div :class="$attrs.class" @keydown.esc.stop="$emit('close')">
        <slot />
      </div>
    </UseFocusTrap>
  </transition>
</template>
