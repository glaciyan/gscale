<script setup lang="ts">
import Button from "../components/Button.vue";

</script>

<template>
  <div class="demo">
      <h1>Button</h1>
      <div class="space-x-2">
        <Button element="hydro">Button</Button>
        <Button element="pyro">Button</Button>
        <Button element="cryo">Button</Button>
        <Button element="geo">Button</Button>
      </div>
      <div class="space-x-2">
        <Button look="outline" element="hydro">Button</Button>
        <Button look="ghost" element="pyro">Button</Button>
        <Button look="outline" element="cryo">Button</Button>
        <Button look="ghost" element="geo">Button</Button>
      </div>
      <div class="space-x-2">
        <Button :isLoading="true" element="hydro">Button</Button>
        <Button :isLoading="true" element="pyro">Button</Button>
        <Button :isLoading="true" element="cryo">Button</Button>
        <Button :isLoading="true" element="geo">Button</Button>
      </div>
    </div>
</template>
