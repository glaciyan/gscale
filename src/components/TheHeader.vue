<script setup lang="ts">
import Navigation from "~/components/Navigation.vue";
import LogoWithLabel from "~/assets/logo-label.svg?component";
import Container from "./Container.vue";
</script>

<template>
  <Container as="header" class="flex space-x-2 h-28 items-center">
    <LogoWithLabel class="mr-16" />
    <Navigation orientation="verical" />
  </Container>
</template>
