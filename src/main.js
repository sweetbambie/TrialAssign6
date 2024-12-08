import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

const apiKey = import.meta.env.VITE_TMDB_KEY;