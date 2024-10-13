<template>
  <div>
    <SectionHero></SectionHero>
    <section class="section-product-grid">
      <div v-if="products" class="product-grid">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
      <div v-else>Loading products...</div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/productStore'
import { useAsyncData } from 'nuxt/app'

const productStore = useProductStore()
const { data: products } = await useAsyncData('products', () => productStore.fetchProducts())
</script>

<style scoped lang="scss">
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
</style>
