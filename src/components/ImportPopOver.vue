<script setup lang="ts">
import { Elements } from "~/lib/data/Elements";
import { GDataFileFormat } from "~/lib/types/GDataFileFormat";
import ElementButton from "./ElementButton.vue";
import ElementProvider from "./ElementProvider.vue";
import GButton from "./GButton.vue";
import PopOver from "./PopOver.vue";
import { ZodError } from "zod";
import { db } from "~/lib/offlineDatabase/db";

defineProps<{ visible: boolean }>();
const emit = defineEmits(["close", "imported"]);

const close = () => {
  importGData.value = null;
  error.value = "";
  isSubmitting.value = false;

  emit("close");
};

// This should behave like tabs
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

const importGData = ref<GDataFileFormat | null>(null);

const hasContent = computed(() => importGData.value !== null);

const error = ref("");

const onFileChange = async (event: any) => {
  error.value = "";

  const files: FileList = event.target.files;
  try {
    if (files.length > 0) {
      const content = await files[0].text();
      importGData.value = GDataFileFormat.fromJson(content);
    }
  } catch (err) {
    console.error(err);
    if (typeof err === "string") {
      error.value = err as string;
    } else if (err instanceof ZodError) {
      if (err.issues[0]) {
        const firstIssue = err.issues[0];
        error.value = `Invalid: ${firstIssue.message} ${firstIssue.path.join(".")}`;
      } else {
        error.value = "Invalid format";
      }
    } else {
      error.value = "Invalid format";
    }
  }
};

const isSubmitting = ref(false);

const submit = async () => {
  isSubmitting.value = true;

  try {
    if (hasContent.value) {
      const data = toRaw(importGData.value)!;

      console.log("importing");
      console.log(data);

      await db.builds.bulkAdd(data.data.builds);

      emit("imported");
      close();
    }
  } catch (err) {
    console.error(err);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <teleport to="#modal">
    <PopOver
      :open="visible"
      backdropClass="fixed inset-0 bg-dark-900/80"
      shellClass="fixed inset-0 flex items-center justify-center p-4"
      transition="fade-slow"
      @close="close"
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

        <!-- <label for="replace_checkbox" class="mt-4">
          <input id="replace_checkbox" v-model="replace" type="checkbox" />
          Delete all current builds
        </label> -->
        <p class="mt-2 text-red-400">{{ error }}</p>
        <div class="space-x-2 mt-4 w-max self-end">
          <GButton @click="close">Cancel</GButton>
          <ElementProvider :element="Elements.cryo">
            <ElementButton :isLoading="isSubmitting" :disabled="!hasContent" @click="submit">Import</ElementButton>
          </ElementProvider>
        </div>
      </div>
    </PopOver>
  </teleport>
</template>
