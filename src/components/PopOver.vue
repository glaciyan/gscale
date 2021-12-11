<script setup lang="ts">
import { UseFocusTrap } from "@vueuse/integrations/useFocusTrap/component";

defineProps<{ open: boolean; backdropClass?: string; shellClass?: string; transition?: string }>();
defineEmits(["close"]);
</script>

<template>
  <teleport to="#app">
    <transition :name="transition">
      <UseFocusTrap v-if="open" @keydown.esc="$emit('close')">
        <div :class="backdropClass" @click.self="$emit('close')">
          <div :class="$attrs.class" @keydown.esc.stop="$emit('close')">
            <slot />
          </div>
        </div>
      </UseFocusTrap>
    </transition>
  </teleport>
</template>
