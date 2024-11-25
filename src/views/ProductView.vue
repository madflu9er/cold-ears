<script setup lang="ts">
import Header from '@/components/Header.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getProduct, type Product } from '@/api/product'

const route = useRoute()
const product = ref<Product>()

const getProductById = async () => {
  if (route.params.id) {
    const p = await getProduct(String(route.params.id))
    product.value = p
  }
}

onMounted(() => {
  getProductById()
})
</script>

<template>
  <main>
    <Header show-logo />
    <div class="content">
      <div class="product">
        <div class="product_image">
          <img :src="product?.pictures?.data?.[0]" class="product_img" />
        </div>
        <div class="product_details">
          <div class="product_name">{{ product?.name }}</div>
          <div class="description_block">
            <div>{{ $t('product.description') }}</div>
            <span>{{ product?.description }}</span>
          </div>
          <div class="description_block">
            <div>{{ $t('product.season') }}</div>
            <span v-for="season in product?.season.data" v-bind:key="season">
              {{ season }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.product {
  max-width: 900px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  gap: 20px;
}
.product_image {
  min-width: 300px;
  height: 500px;
  background: #cccccc46;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product_img {
  height: 100%;
}

.product_details {
  flex: 1;
  background: #9b61612b;
  height: inherit;
  min-height: 400px;
  width: 100%;
}
</style>
