//这个文件是专门用来模拟mock数据接口的
import Mock from 'mockjs'
import banner from './banner.json'
import floor from './floor.json'

//第一个参数代表请求的路径，第二个参数代表返回的数据
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})