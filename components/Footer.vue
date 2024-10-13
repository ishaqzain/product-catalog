<template>
  <footer class="footer">
    <div class="footer_layout">
      © 2024 urbanshop . All rights reserved.
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.footer {
  font-size: .75rem;
  background: var(--white);
  margin-top: 2rem;
  display: flex;
  height: 64px;
  justify-items: center;
  border-top: 1px solid var(--border-color);

  &_layout {
    max-width: 64rem;
    margin: auto;
    padding: 0 5%;
  }
}
</style>
