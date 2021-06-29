// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'
import "../pubilc/css/reset.css"
import 'swiper/css/swiper.css' //css

import TypeNav from './components/TypeNav'
import SlideLoop from './components/SlideLoop'

import './api'


//全局注册的组件，如果一个组件被多次使用，就用全局注册
Vue.component('TypeNav',TypeNav)
Vue.component('SlideLoop',SlideLoop)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //我们所有的组件内部都可以使用this.$router和this.$route
  store,
  components: { App },
  template: '<App/>'
})
