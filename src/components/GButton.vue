<script lang="ts">
import Spinner from "./GSpinner.vue";

export default defineComponent({
  name: "GButton",
  components: { Spinner },

  props: {
    as: {
      type: String,
      required: false,
      default: undefined,
    },
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
    :class="[bStyle, 'focus:outline-none focus-visible:ring h-[42px] px-4 rounded-lg']"
    :disabled="off"
    :aria-disabled="off"
  >
    <div class="flex h-full items-center justify-center">
      <Spinner v-if="isLoading" class="aboslute" />
      <span :class="{ 'opacity-0': isLoading }"><slot /></span>
    </div>
  </button>
</template>
