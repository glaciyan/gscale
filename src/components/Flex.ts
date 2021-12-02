export default defineComponent({
  props: {
    as: {
      type: String,
      required: false
    },
    col: {
      type: Boolean,
      required: false
    }
  },

  render() {
    let className = "flex";
    if (this.$props.col) className += " flex-col";

    return h(this.$props.as ?? "div", { class: className }, this.$slots)
  }
})
