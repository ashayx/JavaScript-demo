// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import './js/jquery.min'
// import './js/zepto'
import './js/config'


import './css/style.css'
import './css/loading.css'
import './css/swiper.min.css'
import './css/animate .css'


import './css/weui.css'
// import './css/flex.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
