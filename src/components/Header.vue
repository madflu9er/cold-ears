<script setup lang="ts">
import { getLocale, setLocale } from '@/localization'
import { ref } from 'vue'

const locales = ['ua', 'en']
const currentLocale = ref(getLocale())

const handleChangeLanguage = (l: string) => {
  setLocale(l as 'ua' | 'en')
  currentLocale.value = l
}

console.log({ lang: currentLocale.value })
</script>

<template>
  <header>
    <div class="menu"></div>
    <div class="logo"></div>
    <div class="languages">
      <div
        class="text_1 language"
        :class="{ activeLanguage: locale === currentLocale }"
        v-for="locale in locales"
        :key="locale"
        @click="handleChangeLanguage(locale)"
      >
        {{ locale }}
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  padding: 28px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
}

.languages {
  display: flex;
  flex-direction: row;
}

.logo {
  flex: 1;
}

.language {
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
}

.activeLanguage {
  text-decoration: underline;
}
</style>
