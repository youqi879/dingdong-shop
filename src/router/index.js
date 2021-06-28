//2\引入并声明使用插件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//保存原来的方法
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, onResoled, onRejected) {
  //证明调用的时候只传递了个匹配路由对象，没有传递成功或者失败的回调
  if (onResoled === undefined && onRejected === undefined) {
    return originPush.call(this, location).catch(() => {})
  } else {
    //证明调用的时候传递了成功或者失败的回调
    return originPush.call(this, location, onResoled, onRejected)
  }
}

VueRouter.prototype.replace = function (location, onResoled, onRejected) {
  //证明调用的时候只传递了个匹配路由对象，没有传递成功或者失败的回调
  if (onResoled === undefined && onRejected === undefined) {
    return originReplace.call(this, location).catch(() => {})
  } else {
    //证明调用的时候传递了成功或者失败的回调
    return originReplace.call(this, location, onResoled, onRejected)
  }
}
import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'


//3、向外暴露一个路由器对象
export default new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      //问号代表keyword可传可不传
      path: '/search:keyword?',
      component: Search,
      name: 'search' //命名路由
    },
    {
      path: '/login',
      component: Login,
      meta: {
        isHidden: true
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        isHidden: true
      }
    },

  ] //配置路由
})
