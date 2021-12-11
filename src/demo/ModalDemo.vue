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
        <Button element="cryo" @click="popOverOpen = true">Open Pop Over</Button>
        <PopOver
          :open="popOverOpen"
          backdropClass="fixed inset-0 bg-dark-800/70 z-[990] flex items-center justify-center"
          class=""
          @close="popOverOpen = false"
        >
          <p>pop!</p>
          <Button element="cryo" @click="popOverOpen = false">Close</Button>
        </PopOver>
      </div>
      <div>
        <Button element="electro" @click="dialog.reveal">Open Modal</Button>
        <Modal
          :isOpen="dialog.isRevealed.value"
          header="This is a modal"
          content="Pretty cool right?"
          question="Do it?"
          closeText="Cancel"
          @close="dialog.cancel"
        >
          <template #buttons>
            <Button element="danger" class="!text-light-important" @click="dialog.confirm">OBLITERATE</Button>
          </template>
        </Modal>
      </div>
    </div>
  </div>
</template>
