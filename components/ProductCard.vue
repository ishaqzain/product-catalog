// components/ProductCard.vue
<template>
   <NuxtLink class="product-card" :to="`/product/${product.id}`">
    <img class="product-card_img" :src="product.image" :alt="product.title" />
    <h3 class="product-card_title">{{ product.title }}</h3>
    <p class="product-card_price">${{ product.price.toFixed(2) }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Product } from '~/types/Product'

defineProps<{ product: Product }>()
</script>

<style scoped lang="scss">
.product-card {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  transition: all 0.3s;

  &_img {
    max-width: 100%;
    height: 150px;
    object-fit: contain;
  }

  &_title {
    font-size: medium;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: var(--primary-text-color);
    text-align: left;
    margin: 1rem 0 .5rem 0;
    min-height: 36px;
  }
  &_price {
    font-size: small;
    font-weight: 600;
    color: var(--secondary-text-color);
    text-align: left;
    margin: .5rem 0;
  }

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    transform: scale(1.025);
  }
}
</style>
