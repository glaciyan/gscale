<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/vue";
import { AscensionLevel, Levels } from "~/interfaces/AscensionLevel";

defineProps<{ value: AscensionLevel }>();
</script>

<template>
    <Listbox :model-value="value" @update:model-value="$emit('update:value', $event)">
        <ListboxButton>{{ value.level }} {{ value.ascended }}</ListboxButton>
        <ListboxOptions>
            <ListboxOption v-for="option in Levels" :key="option.level + option.ascended.toString()" :value="option">
                {{ option.level }} {{ option.ascended }}
            </ListboxOption>
        </ListboxOptions>
    </Listbox>
</template>
