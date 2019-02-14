import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './assets/css/base.css'
import './assets/css/home.css'
import './assets/css/icon.css'

import './assets/js/jquery.min.js'
import './assets/js/slider.js'
import './assets/js/tab.js'


import axios from './plugins/axios';//安装axios插件
Vue.use(axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.afterEach((to,from,next) => {

  window.scrollTo(0,0);

})