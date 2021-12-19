<script setup lang="ts">
import { IWeapon } from "~/lib/data/contracts/IWeapon";

defineProps<{ weapon: IWeapon }>();
</script>

<template>
  <div>{{ weapon.name }}</div>
</template>
