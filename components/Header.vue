<template>
  <header class="header">
    <NuxtLink to="/">
      <span class="header_logo">urbanshop</span>
    </NuxtLink>
  </header>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.header {
  display: flex;
  width: 100%;
  background: var(--primary-color);
  justify-content: center;
  height: 52px;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9;

  &_logo {
    font-size: 1.25rem;
    font-weight: 500;
  }
}
</style>
