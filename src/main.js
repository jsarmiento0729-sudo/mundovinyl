// src/main.js (o src/main.ts)
import { createApp } from 'vue'
import App from './App.vue'
import router from './index.js'
import './style.css' // <--- ESTA LÍNEA DEBE EXISTIR Y APUNTAR AL ARCHIVO CORRECTO

const app = createApp(App)
app.use(router)
app.mount('#app')