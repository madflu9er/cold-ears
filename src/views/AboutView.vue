<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<template>
  <main>
    <Header show-logo />
    <div class="content">
    <span class="text_1">{{ $t('navigation.about') }}</span>
    </div>
  </main>
</template>

<style scoped></style>
