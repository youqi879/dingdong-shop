import {
  reqCategoryList,
  reqBannerList,
  reqFloorList
} from '../api/index'
//存数据
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  //直接修改数据
  RECEIVE_CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  RECEIVE_BANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  RECEIVE_FLOORLIST(state, floorList) {
    state.floorList = floorList
  }
}
const actions = {
  //与组件中的用户对接
  //一般是异步请求
  //提交mutations
  async getCategoryList({
    commit
  }) {
    //发请求拿数据，提交mutations，存储到state
    //await和async作用，可以通过同步代码实现异步效果，可读性强
    const result = await reqCategoryList()
    if (result.code === 200) {
      commit('RECEIVE_CATEGORYLIST', result.data)
    }
  },
  async getBannerList({
    commit
  }) {
    //发请求拿数据，提交mutations，存储到state
    //await和async作用，可以通过同步代码实现异步效果，可读性强
    const result = await reqBannerList()
    if (result.code === 200) {
      commit('RECEIVE_BANNERLIST', result.data)
    }
  },
  async getFloorList({
    commit
  }) {
    //发请求拿数据，提交mutations，存储到state
    //await和async作用，可以通过同步代码实现异步效果，可读性强
    const result = await reqFloorList()
    if (result.code === 200) {
      commit('RECEIVE_FLOORLIST', result.data)
    }
  }
}
const getters = {}
export default ({
    state,
    mutations,
    actions,
    getters,
})