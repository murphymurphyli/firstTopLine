import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.css'
import '../node_modules/nprogress/nprogress.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
