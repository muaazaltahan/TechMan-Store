import Vue from 'vue'
import Meta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'

import './scss/style.scss'

Vue.config.productionTip = false

Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true
})

Vue.directive('cutText',{
  bind: el => {
    el.innerText = `${el.innerText.slice(0,35)}...`
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
