<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <!-- 在路由中配置meta -->
    <Footer v-show="!$route.meta.isHidden"></Footer>
    <!-- 不够优雅，如果有很对，代码会写的很长 -->
    <!-- <Footer v-show="$route.path!=='/login' && $route.path!=='/register'"></Footer> -->
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components:{
    Header,
    Footer,
  }
}
</script>

<style>
</style>
