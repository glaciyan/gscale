<script lang="ts">
import Spinner from "./GSpinner.vue";

export default defineComponent({
  name: "GButton",
  components: { Spinner },

  props: {
    isLoading: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    bStyle: {
      type: String,
      default: "bg-dark-400 text-light-normal shadow-md font-semibold hover:bg-dark-300 transition-colors",
    },
  },
  computed: {
    off() {
      return this.isLoading || this.disabled;
    },
  },
});
</script>

<template>
  <button
    type="button"
    :class="[
      bStyle,
      'focus:outline-none focus-visible:ring h-[42px] px-4 rounded-lg disabled:bg-opacity-30 disabled:cursor-not-allowed transition-opacity',
    ]"
    :disabled="off"
    :aria-disabled="off"
  >
    <div class="flex h-full whitespace-nowrap items-center justify-center">
      <Spinner v-if="isLoading" class="absolute" />
      <span :class="{ 'opacity-0': isLoading }"><slot /></span>
    </div>
  </button>
</template>
