//对axios进行二次封装
//配置基础路径
//
//
//
import axios from 'axios'
//引入nprogress相关的js和css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})
//请求拦截器
service.interceptors.request.use(
  (config) => {
    NProgress.start(); //开启进度条
    return config
  }
)
//响应拦截器
service.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response.data
  },
  (error) => {
    NProgress.done(); //停止进度条
    //可以统一处理错误
    alert('发送ajax请求失败' + error.message || '未知错误')
    return new Promise(() => {})
  }
)
export default service
