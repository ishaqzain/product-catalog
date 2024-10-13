// stores/productStore.ts
import { defineStore } from 'pinia'
import type { Product } from '~/types/Product'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [] as Product[],
    isLoading: false,
  }),
  actions: {
    async fetchProducts() {
      this.isLoading = true
      try {
        const response = await fetch(`${useRuntimeConfig().public.apiBaseUrl}/products`)
        const data = await response.json()
        this.products = data
        return data  // Return the data for useAsyncData
      } catch (error) {
        console.error('Error fetching products:', error)
        return []  // Return an empty array in case of error
      } finally {
        this.isLoading = false
      }
    },
    async fetchProductsById(id:number) {
      this.isLoading = true
      try {
        const response = await fetch(`${useRuntimeConfig().public.apiBaseUrl}/products/${id}`)
        const data = await response.json()
        this.products = data
        return data  // Return the data for useAsyncData
      } catch (error) {
        console.error('Error fetching products:', error)
        return []  // Return an empty array in case of error
      } finally {
        this.isLoading = false
      }
    },
  }
})
