import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vacalender from 'v-calendar'

Vue.config.productionTip = false
Vue.use(Vacalender, {
  componentPrefix: 'vc'
})

Vue.prototype.$apiUrl = 'http://localhost:3000/api/v1/'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
