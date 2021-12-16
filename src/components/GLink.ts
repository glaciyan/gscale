import { RouterLink } from "vue-router";

export default defineComponent({
  name: "GLink",
  props: {
    to: {
      type: String,
      required: true,
    },
    gray: {
      type: Boolean,
    },
    isRouter: {
      type: Boolean,
    },
  },
  computed: {
    className() {
      let className = "block w-max hover:underline ";
      className += this.gray ? "text-light-normal" : "text-blue-400";
      return className;
    },
  },
  render() {
    if (this.isRouter) {
      return h(RouterLink, { to: this.to, class: this.className }, this.$slots);
    } else {
      return h("a", { href: this.to, class: this.className }, this.$slots);
    }
  },
});
