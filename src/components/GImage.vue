<script setup lang="ts">
import { getCharacterImage } from "~/lib/data/util/getCharacterImage";
import { getItemImage } from "~/lib/data/util/getItemImage";
import { getWeaponImage } from "~/lib/data/util/getWeaponImage";

const props = defineProps<{
  type: "characterMugshot" | "characterCard" | "item" | "weapon";
  name: string;
}>();

const src = computed(() => {
  switch (props.type) {
    case "characterCard":
      return getCharacterImage(props.name, "card");
    case "characterMugshot":
      return getCharacterImage(props.name, "mugshot");
    case "item":
      return getItemImage(props.name);
    case "weapon":
      return getWeaponImage(props.name);
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
