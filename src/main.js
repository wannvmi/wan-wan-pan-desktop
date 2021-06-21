import Vue from 'vue'

import 'modern-normalize/modern-normalize.css';
import '@/styles/index.scss' // global css

import App from './App.vue'
import router from './router'
import store from './store'

import vuetify from './plugins/vuetify'

import './utils/error-log' // error log
import './services/ReceiveIpcSender' // receive ipc-sender


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
