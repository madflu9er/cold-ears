import { createI18n } from 'vue-i18n'
import { messages } from './messages'

const i18n = createI18n({
  locale: 'ua',
  fallbackLocale: 'en',
  messages
})

export const setLocale = (locale: 'en' | 'ua' ) => (i18n.global.locale = locale)

export const getLocale = () => i18n.global.locale

export default i18n
