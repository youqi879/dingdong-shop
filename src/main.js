// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //我们所有的组件内部都可以使用this.$router和this.$route
  components: { App },
  template: '<App/>'
})
