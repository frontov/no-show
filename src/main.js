import { createApp } from 'vue'
import App from './App.vue'
import Store from './vuex/store'
import Router from './router/router'
import 'material-design-icons-iconfont'


createApp(App).use(Store).use(Router).mount('#app')