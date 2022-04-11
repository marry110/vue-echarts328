import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
// import * as echarts from 'echarts'
// Vue.prototype.$echarts=echarts

createApp(App).use(store).use(router).mount('#app')
