<script setup lang="ts">
import Container from "../components/PageContainer";
import Button from "../components/Button.vue";
import ButtonDemo from "~/demo/ButtonDemo.vue";
import ModalDemo from "~/demo/ModalDemo.vue";
</script>

<template>
  <Container class="space-y-6">
    <ButtonDemo />
    <ModalDemo />
  </Container>
</template>

<style>
h1 {
  @apply font-bold -mt-2 text-xl;
}

.demo {
  @apply rounded-lg space-y-2 bg-dark-600 p-6;
}
</style>
