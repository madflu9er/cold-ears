<script setup lang="ts"></script>

<template>
  <main>
    <div class="est">
      <span class="text">{{ $t('home.since') }}</span>
      <span class="text">2021</span>
    </div>
    <img src="/img/logo.png" />
    <span class="text title">{{$t('home.title')}}</span>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
  display: flex;
  background: var(--vt-c-white);
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

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
.text {
  color: black;
  font-size: 11px;
  font-weight: 500;
}

.title {
  max-width: 175px;
  text-align: center;
  width: 100%;
  margin-top: 20px
}
</style>
