//接口函数
import {
  method
} from 'lodash'
import request from './ajax'
import mockAjax from './mockAjax'

export const reqCategoryList = () => {
  return request({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}

//请求获取模拟数据接口banner floor
export const reqBannerList = () => {
  return mockAjax({
    url: '/banner',
    method: 'get'
  })
}

export const reqFloorList = () => {
  return mockAjax({
    url: '/floor',
    method: 'get'
  })
}

export const reqSearchInfo = (searchParams) => {
  return mockAjax({
    url: '/list',
    method: 'post',
    data:searchParams 
    //searchParams 是用户搜索的参数，这个参数是用户再发请求的时候传递的，
    //可以是空对象，但必须是个对象，空对象的时候代表商品默认搜索的数据
  })
}

reqFloorList()
reqBannerList()
