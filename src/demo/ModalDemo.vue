<script setup lang="ts">
import Button from "../components/Button.vue";
import PopOver from "~/components/PopOver.vue";
import Modal from "~/components/Modal.vue";

const popOverOpen = ref(false);

const dialog = useConfirmDialog();

dialog.onConfirm(() => {
  console.log("confirmed");
});

dialog.onCancel(() => {
  console.log("cancelled");
});
</script>

<template>
  <div class="demo">
    <h1>Pop Over</h1>
    <div class="flex space-x-2">
      <div>
        <Button @click="popOverOpen = true" element="cryo">Open Pop Over</Button>
        <PopOver
          :open="popOverOpen"
          @close="popOverOpen = false"
          backdropClass="fixed inset-0 bg-dark-800/70 z-[990] flex items-center justify-center"
          class=""
        >
          <p>pop!</p>
          <Button element="cryo" @click="popOverOpen = false">Close</Button>
        </PopOver>
      </div>
      <div>
        <Button @click="dialog.reveal" element="electro">Open Modal</Button>
        <Modal
          :isOpen="dialog.isRevealed.value"
          @close="dialog.cancel"
          header="This is a modal"
          content="Pretty cool right?"
          question="Do it?"
          closeText="Cancel"
        >
          <template #buttons>
            <Button element="danger" class="!text-light-important" @click="dialog.confirm">OBLITERATE</Button>
          </template>
        </Modal>
      </div>
    </div>
  </div>
</template>
