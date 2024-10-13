<template>
  <section class="section-hero">
    <div class="section-hero_layout">
      <div class="section-hero_text">
        <h2>New Arrival Collection</h2>
        <p>Iconic brands and artist collection</p>
      </div>
      <div class="section-hero_img">
        <img src="~/assets/img/img-hero.png" alt="image hero">
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.section-hero {
  min-height: 10vh;
  border-radius: 8px;
  margin: 2rem 0;
  display: flex;
  align-items: center;

  &_layout {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr .5fr;
    gap: 1.5rem;
  }

  &_text{
    h2 {
      font-size: 2.5rem;
      margin: 0;
      font-weight: 400;
      color: var(--primary-text-color)
      // -webkit-text-fill-color: transparent;
      // background-image: repeating-linear-gradient(135deg, #72BF78, #007e7c 50%, #5f5ffd);
      // -webkit-background-clip: text;
      // background-clip: text;
    }
    p {
      margin: .5rem 0 0 0;
      font-size: 1rem;
      font-weight: 400;
      color: var(--secondary-text-color);
    }
  }
}
</style>
