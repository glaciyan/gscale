<script setup lang="ts">
import PageContainer from "~/components/PageContainer";
import WeaponCard from "~/components/weapons/WeaponCard.vue";
import { weaponsViewModel } from "~/lib/viewmodel/WeaponsViewModel";
</script>

<template>
  <PageContainer>
    <WeaponCard v-for="weapon in weaponsViewModel" :key="weapon.normalizedName" :weapon="weapon" />
  </PageContainer>
</template>
