// components/ProductCard.vue
<template>
  <div class="product-card">
    <NuxtLink :to="`/product/${product.id}`">
      <img :src="product.image" :alt="product.title" />
      <h3>{{ product.title }}</h3>
      <p>\${{ product.price.toFixed(2) }}</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Product } from '~/types/Product'

defineProps<{ product: Product }>()
</script>

<style scoped lang="scss">
.product-card {
  border: 1px solid #e0e0e0;
  padding: 10px;
  text-align: center;
  transition: transform 0.3s;

  img {
    max-width: 100%;
    height: 150px;
    object-fit: contain;
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>
