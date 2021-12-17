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
    @apply text-3xl my-4 font-bold text-light-important;
  }
  h2 {
    @apply text-lg font-bold mt-6 mb-1 text-light-important;
  }
  p {
    @apply text-light-normal mb-4 tracking-wide leading-relaxed;
  }
  strong {
    @apply font-bold;
  }
  ul {
    @apply list-disc ml-8 p-0 mx-4 mb-4 space-y-2;
  }
  a {
    @apply text-blue-400 hover:underline;
  }
}
</style>
