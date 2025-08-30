import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CompositionComponents from './components/CompositionComponents.vue'
import OptionsComponents from './components/OptionsComponents.vue'

const app = createApp(App)

app.provide('appName', 'Learning Vue 3')

app.component('CompositionComponents', CompositionComponents)
app.component('OptionsComponents', OptionsComponents)

app.mount('#app')
