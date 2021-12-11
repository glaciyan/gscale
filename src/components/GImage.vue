<script setup lang="ts">
import { getCharacterImage } from "~/lib/data/util/getCharacterImage";
import { getItemImage } from "~/lib/data/util/getItemImage";

const props = defineProps<{
  type: "characterMugshot" | "characterCard" | "item";
  name: string;
}>();

const src = (() => {
  switch (props.type) {
    case "characterCard":
      return getCharacterImage(props.name, "card");
    case "characterMugshot":
      return getCharacterImage(props.name, "mugshot");
    case "item":
      return getItemImage(props.name);
  }
})();
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
