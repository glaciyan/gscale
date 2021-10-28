import { Ref, ref } from "vue";

export function booleanToggle(defaultValue = false): [Ref<boolean>, () => void] {
    const boolean = ref(defaultValue);

    function toggle() {
        boolean.value = !boolean.value;
    }

    return [boolean, toggle];
}
