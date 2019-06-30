import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.css'
import '../node_modules/nprogress/nprogress.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'

// axios.interceptors.request.use(config => {
//   console.log('请求进入了拦截器')
//   console.log(config)
//   return config
// }, error => {
//   return Promise.reject(error)
// })

// axios.interceptors.response.use(response => {
//   return response
// }, error => {
//   return Promise.reject(error)
// })

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
