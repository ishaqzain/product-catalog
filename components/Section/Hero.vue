<template>
  <section class="section-hero">
    <div class="section-hero_layout">
      <div class="section-hero_text">
        <h2>Product Catalog</h2>
        <p>Explore our thoughtfully curated collections, perfect for elevating every style, whether for special occasions or everyday wear.</p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.section-hero {
  min-height: 20vh;
  border-radius: 8px;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 5%;

  &_layout {
    display: grid;
    align-items: center;
    justify-items: center;
  }

  &_text{
    h2 {
      font-size: 1.75rem;
      margin: 0;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    p {
      margin: .5rem 0 0 0;
      font-size: 1rem;
      font-weight: 400;
      color: var(--secondary-text-color);
      max-width: 500px;
    }
  }
}
</style>
