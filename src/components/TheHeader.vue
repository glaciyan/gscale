<script setup lang="ts">
import Navigation from "~/components/TheVerticalNavigation.vue";
import LogoWithLabel from "~/assets/logo-label.svg?component";
import Container from "./Container.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <Container as="header" class="flex space-x-2 h-28 items-center">
    <RouterLink to="/" class="mr-16">
      <LogoWithLabel />
    </RouterLink>
    <Navigation orientation="verical" />
  </Container>
</template>
