<script setup lang="ts">
import repo from "~/lib/data/repository/GenshinDataRepository";
import { Build, db } from "~/lib/offlineDatabase/db";
import ElementProvider from "../ElementProvider.vue";
import sortItems from "~/lib/item/sortItems";
import { calculateLeveling, calculateAscension, calculateTalent } from "~/lib/calculator";
import mergeAmountByName from "~/lib/item/mergeAmountByName";
import Button from "../Button.vue";
import RangeLevelDisplay from "../levelRange/display/RangeLevelDisplay.vue";
import RangeTalentDisplay from "../levelRange/display/RangeTalentDisplay.vue";
import Sword from "../icons/SwordIcon.vue";
import Elemental from "../icons/ElementalIcon.vue";
import Fire from "../icons/FireIcon.vue";
import Image from "../GImage.vue";
import Modal from "../Modal.vue";
import { useLoadingFunction } from "~/composites/useLoadingFunction";
import ItemChecklist from "../ItemChecklist.vue";
import { ItemWithAmount } from "~/lib/types/ItemWithAmount";
import ItemCheckState from "~/lib/item/ItemCheckState";
import useCheckList from "~/composites/useCheckList";
import GSpinner from "../GSpinner.vue";

const props = defineProps<{ build: Build }>();
const emit = defineEmits(["deleted"]);

const character = repo.needCharacter(props.build.entityId);

//#region total items
const levelingItems = calculateLeveling(props.build.level.start, props.build.level.goal);
const items = computed(() =>
  sortItems(
    mergeAmountByName([
      calculateAscension(character, props.build.level.start, props.build.level.goal),
      calculateTalent(character, props.build.normal.start, props.build.normal.goal, true),
      calculateTalent(character, props.build.elemental.start, props.build.elemental.goal),
      calculateTalent(character, props.build.burst.start, props.build.burst.goal),
      [levelingItems.mora, levelingItems.lazy],
    ])
  )
);
//#endregion

//#region Deleting
const deleted = ref(false);

const { loading: isDeleting, execute: deleteBuild } = useLoadingFunction(async () => {
  if (props.build.id) {
    try {
      await db.builds.delete(props.build.id);
      emit("deleted", props.build.id);
      deleted.value = true;
    } catch (error) {
      // TODO prompt user to refresh page and try again
      console.error(error);
    }
  }
});

const deleteDialog = useConfirmDialog();
deleteDialog.onConfirm(deleteBuild);

const hidden = computed(() => deleted.value || isDeleting.value);
//#endregion

//#region Checklist
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const checkList = useCheckList(props.build.id!);

const handleItemClick = (item: ItemWithAmount, state: ItemCheckState) => {
  const checkListIndex = checkList.items.value.findIndex((i) => i.item.normalizedName === item.item.normalizedName);

  if (checkListIndex === -1) {
    checkList.newItem(item);
    return;
  }

  if (state === ItemCheckState.Done) {
    checkList.setItemAmount(checkListIndex, 0);
  } else {
    checkList.setItemAmount(checkListIndex, item.amount);
  }
};
//#endregion

//#region Edit Button
const router = useRouter();

const edit = () => {
  router.push(`/build/${character.normalizedName}?edit=${props.build.id}`);
};
//#endregion
</script>

<template>
  <template v-if="!hidden">
    <ElementProvider :element="character.element">
      <div class="rounded-md flex flex-col bg-dark-700 shadow-md overflow-hidden">
        <div class="flex flex-grow <md:flex-col">
          <div class="sm:flex">
            <div class="flex min-h-32 relative sm:w-50">
              <div class="inset-x-0 top-0 absolute fading-out">
                <Image
                  class="object-cover h-32 w-full opacity-50"
                  type="characterCard"
                  :name="character.normalizedName"
                  width="240"
                  height="150"
                />
              </div>
              <div class="p-6 relative <sm:p-4">
                <p class="font-bold text-lg text-light-important mb-2">{{ character.name }}</p>
                <div class="space-y-2">
                  <RangeLevelDisplay :range="build.level" />
                  <RangeTalentDisplay title="Normal" :range="build.normal">
                    <template #icon>
                      <Sword class="h-[26px] -m-0.5 w-[26px]" />
                    </template>
                  </RangeTalentDisplay>
                  <RangeTalentDisplay title="Elemental" :range="build.elemental">
                    <template #icon>
                      <Elemental class="-m-0.5" />
                    </template>
                  </RangeTalentDisplay>
                  <RangeTalentDisplay title="Burst" :range="build.burst">
                    <template #icon>
                      <Fire class="-m-0.5" />
                    </template>
                  </RangeTalentDisplay>
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
        <div class="flex bg-dark-600/70 border-t-2 border-dark-400 py-3 px-6 justify-end">
          <Button look="ghost" element="neutral" class="mr-2 !h-9 !text-light-ternary" @click="deleteDialog.reveal">
            Delete
          </Button>
          <Button look="outline" class="mr-2 !h-9" @click="edit">Edit</Button>
          <!-- <Button class="!h-9">Planner</Button> -->
        </div>
      </div>
    </ElementProvider>
  </template>
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
      <Button element="danger" class="!text-white" @click="deleteDialog.confirm">Delete</Button>
    </template>
  </Modal>
</template>

<style scoped>
.fading-out::after {
  @apply bg-gradient-to-b from-transparent h-full to-dark-700 w-full inset-0 content-none absolute;
}
</style>
