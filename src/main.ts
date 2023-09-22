import './assets/main.css'

import { createApp } from 'vue'
import VueFeather from 'vue-feather';
import App from './App.vue'
import router from './router'
import i18n from './localization'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.component(VueFeather.name, VueFeather);

app.mount('#app')
