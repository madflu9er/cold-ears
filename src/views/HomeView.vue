<script setup lang="ts">
import BottomNavigation from '@/components/BottomNavigation.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <main>
    <Header />
    <div class="content">
      <div class="est">
        <span class="text_1">{{ $t('home.since') }}</span>
        <span class="text_1">2021</span>
      </div>
      <img src="/img/logo.png" />
      <span class="text_1 title">{{ $t('home.title') }}</span>
    </div>
    <menu>
      <BottomNavigation />
    </menu>
  </main>
</template>

<style scoped>
.est {
  display: flex;
  max-width: 200px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding-bottom: 5px;
  margin-bottom: 55px;
}

.title {
  max-width: 175px;
  text-align: center;
  width: 100%;
  margin-top: 20px;
}

menu {
  padding-bottom: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 500px;
  width: 100%;
}
</style>
