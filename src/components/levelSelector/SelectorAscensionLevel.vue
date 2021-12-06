<script setup lang="ts">
import { AscensionLevel, Levels } from "~/lib/interfaces/AscensionLevel";
import AscensionCheckbox from "../CheckboxAscension.vue";
import StarIcon from "../icons/Star.vue";
import CustomSelector from "../SelectorCustom.vue";

const props = defineProps<{ modelValue: AscensionLevel; cbClass?: string }>();
const emit = defineEmits(["update:modelValue"]);

const update = (val: { level?: number; ascended?: boolean }) => {
  // make a copy of the object and merge with current value https://github.com/vuejs/vue/issues/4373#issuecomment-279826554
  const updatedObject = Object.assign({}, props.modelValue, val);

  emit("update:modelValue", updatedObject);
};

const cannotAscend = computed(() => {
  return props.modelValue.level === 1 || props.modelValue.level === 90;
});
</script>

<template>
  <CustomSelector
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    :listItems="Levels"
    :class="$attrs.class"
  >
    <template #button="slotProps">
      {{ (slotProps.value as any).level }}
    </template>
    <template #item="{ option }">
      {{ option.level }} <span v-if="option.ascended" class="sr-only">Ascended</span>
      <StarIcon v-if="option.ascended" class="flex-shrink-0 ml-1" />
    </template>
  </CustomSelector>
  <AscensionCheckbox
    :class="cbClass"
    :modelValue="modelValue.ascended"
    :disabled="cannotAscend"
    @update:modelValue="update({ ascended: $event })"
  />
</template>
