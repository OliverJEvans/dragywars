import Vue from 'vue'
import { firestorePlugin } from 'vuefire'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router/router'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(firestorePlugin)
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
