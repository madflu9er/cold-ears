<script setup lang="ts">
const routes: Array<{ route: string; name: string }> = [
  {
    route: '/shipping',
    name: 'navigation.shipping'
  },
  {
    route: '/returning',
    name: 'navigation.returning'
  },
  {
    route: '/about',
    name: 'navigation.about'
  },
  {
    route: '/contact',
    name: 'navigation.contacts'
  }
]
</script>

<template>
  <router-link v-for="route in routes" :key=route.route :to=route.route>{{
    $t(route.name)
  }}</router-link>
</template>

<style scoped>
a {
  color: black;
  outline: none;
}
</style>
