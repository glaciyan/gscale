<script setup lang="ts">
import PageContainer from "~/components/PageContainer";
import WeaponCard from "~/components/weapons/WeaponCard.vue";
import { weaponsViewModel } from "~/lib/viewmodel/WeaponsViewModel";
</script>

<template>
  <PageContainer size="md">
    <p class="font-bold mb-2 text-lg">Weapons (Beta)</p>
    <div class="flex flex-wrap">
      <template v-for="weapon in weaponsViewModel" :key="weapon.normalizedName">
        <WeaponCard :weapon="weapon" />
      </template>
    </div>
  </PageContainer>
</template>
