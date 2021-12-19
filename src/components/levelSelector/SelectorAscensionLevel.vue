<script setup lang="ts">
import { AscensionLevel } from "~/lib/types/AscensionLevel";
import AllLevels from "~/lib/data/Levels";
import AscensionCheckbox from "../CheckboxAscension.vue";
import CustomSelector from "../SelectorCustom.vue";
import AscensionLevelDisplay from "../AscensionLevelDisplay.vue";
import { compareAscension } from "~/lib/level/compareAscension";

const props = withDefaults(defineProps<{ modelValue: AscensionLevel; cbClass?: string; maxLevel?: AscensionLevel }>(), {
  cbClass: undefined,
  maxLevel: () => ({ level: 90, ascended: false }),
});
const emit = defineEmits(["update:modelValue"]);

const update = (val: { level?: number; ascended?: boolean }) => {
  // make a copy of the object and merge with current value https://github.com/vuejs/vue/issues/4373#issuecomment-279826554
  const updatedObject = Object.assign({}, props.modelValue, val);

  emit("update:modelValue", updatedObject);
};

const cannotAscend = computed(() => {
  return (
    props.modelValue.level === 1 ||
    (props.modelValue.level === props.maxLevel.level && props.maxLevel.ascended === false)
  );
});

const levels = computed(() => {
  return AllLevels.filter((l) => compareAscension(l, props.maxLevel).isLessOrEqual());
});
</script>

<template>
  <CustomSelector
    :modelValue="modelValue"
    :listItems="levels"
    :class="$attrs.class"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <template #button="slotProps">
      {{ (slotProps.value as any).level }}
    </template>
    <template #item="{ option }">
      <AscensionLevelDisplay :ascensionLevel="option" />
    </template>
  </CustomSelector>
  <AscensionCheckbox
    :class="cbClass"
    :modelValue="modelValue.ascended"
    :disabled="cannotAscend"
    @update:modelValue="update({ ascended: $event })"
  />
</template>
