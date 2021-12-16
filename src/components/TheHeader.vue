<script setup lang="ts">
import Navigation from "~/components/TheVerticalNavigation.vue";
import LogoWithLabel from "~/assets/logo-label.svg?component";
import Container from "./PageContainer";
import { RouterLink } from "vue-router";
import ButtonSupport from "./ButtonSupport.vue";
</script>

<template>
  <Container as="header" class="flex h-28 justify-start sm:items-center <sm:flex-col <sm:h-auto <sm:my-4">
    <div class="flex justify-between sm:mr-16 <sm:(mb-4)">
      <RouterLink to="/">
        <LogoWithLabel />
      </RouterLink>
      <ButtonSupport class="hidden <sm:block" />
    </div>
    <div class="flex w-full">
      <Navigation orientation="verical" class="flex-1" />
      <ButtonSupport class="<sm:hidden" />
    </div>
  </Container>
</template>
