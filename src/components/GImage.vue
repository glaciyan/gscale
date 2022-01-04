<script setup lang="ts">
import { IBaseCharacter } from "~/lib/data/contracts/IBaseCharacter";
import { IItem } from "~/lib/data/contracts/IItem";
import { getCharacterImage } from "~/lib/data/util/getCharacterImage";
import { getItemImage } from "~/lib/data/util/getItemImage";

const props = defineProps<{
  type: "characterMugshot" | "characterCard" | "item";
  entity: IBaseCharacter | IItem;
}>();

const src = computed(() => {
  switch (props.type) {
    case "characterCard":
      //@ts-expect-error type prop filters the case out where it can be an item
      return getCharacterImage(props.entity, "card");
    case "characterMugshot":
      //@ts-expect-error type prop filters the case out where it can be an item
      return getCharacterImage(props.entity, "mugshot");
    case "item":
      return getItemImage(props.entity.normalizedName);
  }
});
</script>

<script lang="ts">
export default defineComponent({ inheritAttrs: false });
</script>

<template>
  <picture>
    <source type="image/webp" :srcset="src.webp" />
    <source type="image/png" :srcset="src.png" />
    <img :src="src.png" alt="" draggable="false" decoding="async" loading="lazy" v-bind="$attrs" />
  </picture>
</template>
