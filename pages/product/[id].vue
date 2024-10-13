<template>
  <div v-if="product">
    <div class="breadcrumb"><NuxtLink to="/">Back to catalog</NuxtLink> / {{ product.title }}</div>
    <div class="product-detail">
      <div class="product-info">
        <div class="product-image">
          <img :src="product.image" :alt="product.title" />
        </div>
        <h2 class="product-info_title">{{ product.title }}</h2>
        <p class="product-info_price">${{ product.price.toFixed(2) }}</p>
        <p class="product-info_desc">{{ product.description }}</p>
      </div>
      <div class="product-action">
        <h2 class="product-action_title">{{ product.title }}</h2>
        <span class="product-action_price"> ${{ product.price.toFixed(2) }}</span>
        <div class="btn-group">
          <button class="btn btn--outline"> Add to cart</button>
          <button class="btn"> Buy now</button>
        </div>
      </div>
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

.product {

  &-info_title {
     margin-bottom: .5rem;
  }
  &-detail {
    margin-top: 2rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr .5fr;
    align-items: start;
  }

  &-image {
    height: auto;
    object-fit: contain;
    background-color: #fff;
    border: 1px solid var(--border-color);
    padding: 10%;
    border-radius: 8px;
  }

  &-action {
    padding: 2rem;
    background-color: #fff;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    border-radius: 8px;
    position: sticky;
    top: 6rem;

    &_price{
      display: block;
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }

    &_title {
      font-size: 1rem;
      margin:0 0 1rem 0;
      font-weight: 400;
    }
  }

  &-info{
    &_price {
      color: #e63946;
      font-size: 2rem;
      font-weight: bold;
      margin: 0;
    }
  }
}

// media query mobile
@media only screen and (max-width: 600px) {
  .product {
    &-info {
      margin-bottom: 4rem;
    }

    &-detail {
      grid-template-columns: 1fr;
    }
    &-action {
      position: fixed;
      width: auto;
      margin: auto;
      left: 0;
      right: 0;
      padding: 1rem;
      bottom: 0;
      height: auto;
      top: auto;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 0px 100px 0px;

      &_title {
        display: none;
      }

      &_price {
        display: none;
      }
    }
  }
  .btn-group {
    flex-direction: row;
  }
}
</style>
