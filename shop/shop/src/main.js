import { createApp } from 'vue'
import App from './App.vue'
import router from "../router/index.js"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from '../store/index.js'

const app=createApp(App)
//element icon注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router).use(ElementPlus).use(store).mount('#app')