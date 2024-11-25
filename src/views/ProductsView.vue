<script setup lang="ts">
import Header from '@/components/Header.vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const products = ref([])

console.log({ route: { ...route } })

watch(route, async (newRoute, oldRoute) => {
  console.log({ newRoute: newRoute.params.name })
})
</script>

<template>
  <main>
    <Header show-logo />
    <div class="content">
      <div class="product">
       {{$route.fullPath}}
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
  width: 350px;
  height: 500px;
  background: #cccccc46;
}

.product_details {
  flex: 1;
  background: #9b61612b;
  height: inherit;
  min-height: 400px;
  width: 100%;
}
</style>
