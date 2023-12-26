/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

import { createI18n } from 'vue-i18n'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import messages from './locales'

const app = createApp(App)

registerPlugins(app)

const i18n = createI18n({
    locale: 'hu', // set locale
    fallbackLocale: 'hu', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  })

app.use(i18n)

app.mount('#app')
