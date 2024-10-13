<template>
  <div v-if="product" class="product-detail">
    <img :src="product.image" :alt="product.title" class="product-image" />
    <div class="product-info">
      <h1>{{ product.title }}</h1>
      <p class="price">${{ product.price.toFixed(2) }}</p>
      <p>{{ product.description }}</p>
      <NuxtLink to="/">Back to Catalog</NuxtLink>
    </div>
  </div>
  <div v-else>Loading product details...</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProductStore } from '~/stores/productStore'
import { useAsyncData } from 'nuxt/app'


const route = useRoute()
const productStore = useProductStore()
const { data: product, error } = await useAsyncData(
  `product-${route.params.id}`,
  async () => {
    try {
      return await productStore.fetchProductsById(Number(route.params.id))
    } catch (err) {
      console.error('Failed to fetch product:', err)
      throw new Error('Could not load product details')
    }
  }
)

</script>

<style scoped lang="scss">
.product-detail {
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  max-width: 300px;
  height: auto;
  object-fit: contain;
}

.product-info {
  flex: 1;
}

.price {
  color: #e63946;
  font-size: 24px;
  font-weight: bold;
}
</style>
