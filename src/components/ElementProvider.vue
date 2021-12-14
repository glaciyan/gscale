<script lang="ts">
export default defineComponent({
  provide() {
    return {
      element: computed(() => this.element),
    };
  },
  props: {
    element: {
      type: Object,
      required: true,
    },
  },
});
</script>

<template>
  <slot />
</template>
