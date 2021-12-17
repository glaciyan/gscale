<script setup lang="ts">
import PageContainer from "./PageContainer";
</script>

<template>
  <PageContainer size="sm">
    <slot />
  </PageContainer>
</template>

<style lang="less">
.markdown-body {
  h1 {
    @apply text-3xl font-bold my-4 text-light-important;
  }
  h2 {
    @apply text-2xl font-bold mt-4 mb-2 text-light-important;
  }
  p {
    @apply text-light-normal my-4;
  }
  strong {
    @apply font-bold;
  }
  ul {
    @apply list-disc ml-8 p-0 mx-4;
  }
  a {
    @apply text-blue-400 hover:underline;
  }
}
</style>
