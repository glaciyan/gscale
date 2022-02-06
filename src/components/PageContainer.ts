import type { PropType } from "vue";

export default defineComponent({
  name: "PageContainer",
  props: {
    as: {
      type: String,
      required: false,
      default: "div",
    },
    size: {
      type: String as PropType<"xl" | "2xl">,
      required: false,
      default: "xl",
    },
  },
  render() {
    // change this into a switch if more are needed
    const screenSize = this.$props.size === "xl" ? "max-w-screen-xl xlp:px-4" : "max-w-screen-2xl 2xlp:px-4";

    const className = `mx-auto ${screenSize} <sm:px-2`;

    return h(this.$props.as, { class: className }, this.$slots);
  },
});
