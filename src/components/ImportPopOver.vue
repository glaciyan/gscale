<script setup lang="ts">
import PopOver from "./PopOver.vue";
import GButton from "./GButton.vue";
import ElementProvider from "./ElementProvider.vue";
import { Elements } from "~/lib/data/Elements";
import ElementButton from "./ElementButton.vue";

defineProps<{ visible: boolean }>();
defineEmits(["close"]);

// const formats = [
//   {
//     value: "gscale_data",
//     label: "GScale Data Format",
//   },
//   {
//     value: "good",
//     label: "GOOD Format",
//   },
// ];

// const selectedFormat = ref(Object.assign({}, formats[0]));

const replace = ref(false);

const onFileChange = async (event: any) => {
  const files: FileList = event.target.files;
  console.log(await files[0].text());
};
</script>

<template>
  <teleport to="#modal">
    <PopOver
      :open="visible"
      backdropClass="fixed inset-0 bg-dark-900/80"
      shellClass="fixed inset-0 flex items-center justify-center p-4"
      transition="fade-slow"
      @close="$emit('close')"
    >
      <div class="rounded-md flex flex-col max-w-screen-md bg-dark-600 p-6">
        <h1 class="font-semibold text-lg text-light-important mb-4">Import file into gscale</h1>
        <!-- <SelectorCustom v-model:modelValue="selectedFormat" :listItems="formats" class="rounded-md">
          <template #button="current">
            {{ (current.value as any).label }}
          </template>
          <template #item="{ option }">
            {{ option.label }}
          </template>
        </SelectorCustom> -->

        <input id="data_file" type="file" name="data_import" accept="application/json" @change="onFileChange" />

        <label for="replace_checkbox" class="mt-4">
          <input id="replace_checkbox" v-model="replace" type="checkbox" />
          Delete all current builds
        </label>
        <div class="mt-4 w-max self-end space-x-2">
          <GButton @click="$emit('close')">Cancel</GButton>
          <ElementProvider :element="Elements.cryo">
            <ElementButton @click="$emit('close')">Import</ElementButton>
          </ElementProvider>
        </div>
      </div>
    </PopOver>
  </teleport>
</template>
