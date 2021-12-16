export default defineComponent({
  name: "PageContainer",
  props: {
    as: {
      type: String,
      required: false,
      default: "div",
    },
    size: {
      type: String,
      required: false,
      default: "xl",
    },
  },
  render() {
    const className = `<sm:mx-2 <xl:mx-5 mx-auto max-w-screen-${this.$props.size}`;

    return h(this.$props.as, { class: className }, this.$slots);
  },
});
