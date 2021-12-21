import Spinner from "./GSpinner.vue";

export default defineComponent({
  name: "GButton",

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

  render() {
    return h(
      this.as ?? "button",
      {
        type: "button",
        class: `${this.bStyle} focus:outline-none focus-visible:ring h-[42px] px-4 rounded-lg`,
        disabled: this.off,
        ariaDisabled: this.off,
      },
      [
        h("div", { class: "flex items-center justify-center h-full" }, [
          this.isLoading && h(Spinner, { class: "absolute" }),
          h("span", { class: `${this.isLoading ? "opacity-0" : ""}` }, this.$slots.default!()),
        ]),
      ]
    );
  },
});
