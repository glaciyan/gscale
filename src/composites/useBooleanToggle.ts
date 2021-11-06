import { Ref, ref } from "vue";

export function useBooleanToggle(defaultValue = false): [Ref<boolean>, () => void] {
  const value = ref(defaultValue);

  function toggle() {
    value.value = !value.value;
  }

  return [value, toggle];
}
