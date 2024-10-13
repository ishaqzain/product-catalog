<template>
  <header class="header">
    <div class="header_layout">
      <span class="header_icon"><img src="~/assets/img/ico-menu.svg" alt="icon menu"></span>
      <NuxtLink to="/">
        <span class="header_logo">urbanshop</span>
      </NuxtLink>
    <span class="header_icon"><img src="~/assets/img/ico-bag.svg" alt="icon bag"></span>
    </div>
  </header>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.header {
  display: flex;
  width: 100%;
  justify-content: center;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 9;
  border-bottom: 1px solid var(--border-color);
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &_layout {
    display: flex;
    width: 100%;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5%;
  }

  &_icon {
    width: 28px;
    height: auto;
  }

  &_logo {
    font-size: 1.25rem;
    font-weight: 600;
    -webkit-text-fill-color: transparent;
    background-image: repeating-linear-gradient(135deg, #72BF78, #007e7c 50%, #5f5ffd);
    -webkit-background-clip: text;
    background-clip: text;
  }
}
</style>
