<script setup lang="ts">
import Navigation from "~/components/TheVerticalNavigation.vue";
import LogoWithLabel from "~/assets/logo-label.svg?component";
import Container from "./PageContainer";
import { RouterLink } from "vue-router";
</script>

<template>
  <Container as="header" class="flex flex-wrap space-x-2 h-28 items-center <sm:my-4">
    <RouterLink to="/" class="mr-16 <sm:(ml-2)">
      <LogoWithLabel />
    </RouterLink>
    <Navigation orientation="verical" />
  </Container>
</template>
