<script setup lang="ts">
import useCheckList from "~/composites/useCheckList";
import { ICharacter } from "~/lib/data/contracts/ICharacter";
import { ITraveler } from "~/lib/data/contracts/ITraveler";
import FillAmount, { FillState } from "~/lib/item/FillAmount";
import { Build, db } from "~/lib/offlineDatabase/db";
import { ItemWithAmount } from "~/lib/types/ItemWithAmount";
import EButton from "../ElementButton.vue";
import ElementProvider from "../ElementProvider.vue";
import Image from "../GImage.vue";
import GSpinner from "../GSpinner.vue";
import Elemental from "../icons/ElementalIcon.vue";
import Fire from "../icons/FireIcon.vue";
import Sword from "../icons/SwordIcon.vue";
import ItemChecklist from "../ItemChecklist.vue";
import RangeLevelDisplay from "../levelRange/display/RangeLevelDisplay.vue";
import RangeTalentDisplay from "../levelRange/display/RangeTalentDisplay.vue";
import Modal from "../Modal.vue";
import HandleIcon from "../icons/HandleIcon.vue";

const props =
  defineProps<{ character: ICharacter | ITraveler; items: ItemWithAmount[]; data: Build; handle?: boolean }>();
const emit = defineEmits(["deleted"]);

watch(
  () => props.data.order,
  (value) => {
    console.log(value);
  }
);

//#region Deleting
const deleteBuild = async () => {
  if (props.data.id) {
    try {
      await db.builds.delete(props.data.id);
      emit("deleted", props.data.id);
    } catch (error) {
      // TODO prompt user to refresh page and try again
      console.error(error);
    }
  }
};

const deleteDialog = useConfirmDialog();
deleteDialog.onConfirm(deleteBuild);
//#endregion

//#region Checklist
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const checkList = useCheckList(props.data.id!);

const handleItemClick = (item: ItemWithAmount, fillAmount: FillAmount) => {
  const checkListIndex = checkList.items.value.findIndex((i) => i.item.normalizedName === item.item.normalizedName);

  if (checkListIndex === -1) {
    checkList.newItem(item);
    return;
  }

  if (fillAmount.state === FillState.Done) {
    checkList.setItemAmount(checkListIndex, 0);
  } else {
    checkList.setItemAmount(checkListIndex, item.amount);
  }
};
//#endregion

//#region Edit Button
const router = useRouter();

const edit = () => {
  router.push(`/build/${props.character.normalizedName}?edit=${props.data.id}`);
};
//#endregion
</script>

<template>
  <div>
    <ElementProvider :element="character.element">
      <div class="rounded-md flex flex-col bg-dark-700 shadow-md overflow-hidden">
        <div class="flex flex-grow <lg:flex-col">
          <div class="lg:flex">
            <div class="flex min-h-32 relative lg:w-50">
              <div class="inset-x-0 top-0 absolute fading-out">
                <Image
                  class="object-cover h-32 w-full opacity-50"
                  type="characterCard"
                  :entity="character"
                  width="240"
                  height="150"
                />
              </div>
              <div class="p-6 relative <sm:p-4">
                <p class="font-bold text-lg text-light-important mb-2">
                  {{ character.name }}
                  <span v-if="character.isTraveler" :class="`text-genshin-element-${character.element.normalizedName}`">
                    {{ character.element.name }}
                  </span>
                </p>
                <div class="-m-1">
                  <RangeLevelDisplay class="m-1" :range="data.level" />
                  <div class="flex flex-wrap">
                    <RangeTalentDisplay class="m-1" title="Normal" :range="data.normal" :icon="Sword" />
                    <RangeTalentDisplay class="m-1" title="Elemental" :range="data.elemental" :icon="Elemental" />
                    <RangeTalentDisplay class="m-1" title="Burst" :range="data.burst" :icon="Fire" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-dark-600 w-full relative">
            <div class="flex flex-wrap h-full h-max p-4 <sm:p-3">
              <div v-if="checkList.loading.value" class="flex inset-0 absolute items-center justify-center">
                <GSpinner />
              </div>
              <ItemChecklist v-else :items="items" :checkedOff="checkList.items.value" @itemClick="handleItemClick" />
            </div>
          </div>
        </div>
        <div class="flex bg-dark-600/70 border-t-2 border-dark-300 py-3 px-6 items-center">
          <div class="flex-1">
            <div title="Drag to reorder" class="w-max">
              <HandleIcon class="cursor-move h-5 text-light-ternary w-5 handle" />
            </div>
          </div>
          <EButton look="ghost" element="neutral" class="mr-2 !h-9 !text-light-ternary" @click="deleteDialog.reveal">
            Delete
          </EButton>
          <EButton look="outline" class="mr-2 !h-9" @click="edit">Edit</EButton>
          <!-- <Button class="!h-9">Planner</Button> -->
        </div>
      </div>
    </ElementProvider>
    <Modal
      class="max-w-96"
      :isOpen="deleteDialog.isRevealed.value"
      header="Delete build"
      question="Are you sure?"
      closeText="Cancel"
      @close="deleteDialog.cancel"
    >
      <template #default>
        <p>
          This will delete your <span class="font-bold text-light-important">{{ character.name }}</span> build including
          your checklist.
        </p>
      </template>
      <template #buttons>
        <EButton element="danger" class="!text-white" @click="deleteDialog.confirm">Delete</EButton>
      </template>
    </Modal>
  </div>
</template>

<style scoped>
.fading-out::after {
  @apply bg-gradient-to-b from-transparent h-full to-dark-700 w-full inset-0 content-none absolute;
}
</style>
