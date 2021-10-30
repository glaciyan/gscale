<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/vue";
import { AscensionLevel, Levels } from "~/interfaces/AscensionLevel";
import AscensionStar from "~/assets/icons/asc_star.svg";

defineProps<{ value: AscensionLevel }>();
</script>

<template>
    <Listbox :model-value="value" @update:model-value="$emit('update:value', $event)">
        <ListboxButton class="">{{ value.level }} {{ value.ascended }}</ListboxButton>
        <ListboxOptions>
            <ListboxOption
                class="flex items-center"
                v-for="option in Levels"
                :key="option.level + option.ascended.toString()"
                :value="option"
            >
                {{ option.level }} <AscensionStar v-if="option.ascended" class="ml-1" />
            </ListboxOption>
        </ListboxOptions>
    </Listbox>
</template>
