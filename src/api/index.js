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

reqFloorList()
reqBannerList()
