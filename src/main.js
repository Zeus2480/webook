import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import vuetify from './plugins/vuetify'
import VueApexCharts from 'vue-apexcharts'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
Vue.use(VueApexCharts)

Vue.component('apex-chart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
