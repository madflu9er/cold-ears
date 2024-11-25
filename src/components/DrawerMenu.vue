<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const menuItems = [
  { name: 'header.menu.dresses', route: 'dresses' },
  { name: 'header.menu.shawls', route: 'shawls' }
]

const router = useRouter()
const route = useRoute()

const isMenuVisible = ref(false)
const currentRoute = ref(router.currentRoute.value.params.name)

const handleMenuVisible = () => (isMenuVisible.value = !isMenuVisible.value)

const handleNavigate = (route: string) => {
  router.push(`/products/${route}`)
  handleMenuVisible()
}

watch(route, (newValue, _) => {
  currentRoute.value = newValue.params.name
})
</script>

<template>
  <div class="menu_wrapper">
    <vue-feather @click="handleMenuVisible" type="menu" class="icon" />
    <div v-if="isMenuVisible" class="menu">
      <span
        v-for="route in menuItems"
        :key="route.route"
        :class="{ active: currentRoute === route.route }"
        @click="handleNavigate(route.route)"
      >
        {{ $t(route.name) }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.icon {
  color: #222;
  cursor: pointer;
}
.menu_wrapper {
  position: relative;
}
.menu {
  position: absolute;
  margin-top: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.active {
  color: #595959 !important;
  text-decoration: underline;
  text-decoration-color: #595959;
}

.menu > span {
  color: black;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.menu > span:hover {
  text-decoration: underline;
}
</style>
