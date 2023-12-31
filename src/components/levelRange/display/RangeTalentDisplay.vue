<script setup lang="ts">
import type { Component } from "vue";
import type { Talent } from "~/lib/types/Talent";
import SelectorIconSeperator from "../../levelSelector/SelectorIconSeperator.vue";

const props = defineProps<{ range: Talent; title: string; icon: Component }>();

const className = "flex bg-dark-400 pl-3 items-center w-15 <lg:(w-9 pl-2)";
const upgradedStyle = { "text-cyan-400": props.range.upgraded };
</script>

<template>
  <div>
    <p class="font-semibold">{{ title }}</p>
    <div class="rounded-lg flex h-8 shadow-md w-max overflow-hidden">
      <div :class="[className, upgradedStyle]">
        {{ range.upgraded ? range.start + 3 : range.start }}
      </div>
      <SelectorIconSeperator class="!w-9">
        <component :is="icon" class="-m-0.5" />
      </SelectorIconSeperator>
      <div :class="[className, upgradedStyle]">
        {{ range.upgraded ? range.goal + 3 : range.goal }}
      </div>
    </div>
  </div>
</template>
~/model/Talent