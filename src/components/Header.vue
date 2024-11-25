<script setup lang="ts">
import DrawerMenu from './DrawerMenu.vue'
import { getLocale, setLocale } from '@/localization'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const { showLogo } = defineProps({
  showLogo: Boolean
})

const locales = ['ua', 'en']
const currentLocale = ref(getLocale())

const handleChangeLanguage = (l: string) => {
  setLocale(l as 'ua' | 'en')
  currentLocale.value = l
}

const goHome = () => router.push('/');
</script>

<template>
  <header>
    <div class="menu">
      <DrawerMenu />
    </div>
    <div class="logo">
      <img @click="goHome" v-if="showLogo" class="header_logo" src="/img/logo.png" />
    </div>
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
      <div class="action_items">
        <vue-feather type="search" class="icon"></vue-feather>
        <vue-feather type="user" class="icon"></vue-feather>
        <vue-feather type="shopping-bag" class="icon"></vue-feather>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header_logo {
  width: 80px;
  cursor: pointer;
}
.icon {
  color: #222;
  cursor: pointer;
}

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
  flex: 0.25;
  align-items: center;
  justify-content: flex-end;
}

.action_items {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  margin-left: 20px;
}

.logo {
  flex: 0.5;
  text-align: center;
}

.language {
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
}

.menu {
  display: flex;
  flex-direction: row;
  flex: 0.25;
}

.activeLanguage {
  text-decoration: underline;
}

@media (max-width: 1280px) {
  header {
    padding: 28px;
  }
}
</style>
