<script setup lang="ts">
import Button from "./Button.vue";
import { UseFocusTrap } from "@vueuse/integrations/useFocusTrap/component";

const props = defineProps<{ open: boolean; backdropClass?: string; shellClass?: string }>();
const emit = defineEmits(["close"]);
</script>

<template>
  <teleport to="#app">
    <transition>
      <UseFocusTrap v-if="open" @keydown.esc="$emit('close')">
        <div @click.self="$emit('close')" :class="backdropClass">
          <div @keydown.esc.stop="$emit('close')" :class="$attrs.class">
            <slot />
          </div>
        </div>
      </UseFocusTrap>
    </transition>
  </teleport>
</template>
