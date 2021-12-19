<script setup lang="ts">
import WeaponCard from "~/components/weapons/WeaponCard.vue";
import { weaponsViewModel } from "~/lib/viewmodel/WeaponsViewModel";
</script>

<template>
  <div class="<sm:mx-2 <md:mx-5 mx-auto max-w-screen-md">
    <p class="font-bold mb-2 text-lg">Weapons (Beta)</p>
    <div class="flex flex-wrap justify-center w-full">
      <template v-for="weapon in weaponsViewModel" :key="weapon.normalizedName">
        <WeaponCard :weapon="weapon" />
      </template>
    </div>
  </div>
</template>
