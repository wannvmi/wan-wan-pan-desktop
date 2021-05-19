import Vue from 'vue'

import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'
import store from './store'

import vuetify from './plugins/vuetify'

import './utils/error-log' // error log
import './utils/receive-ipc-sender'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
