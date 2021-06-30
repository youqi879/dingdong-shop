import Vue from 'vue'
import Vuex from 'vuex'
import {reqSearchInfo} from '../api/index'
Vue.use(Vuex)


const state = {
  searchInfo: {}
}
const mutations = {
  RECEIVE_SEARCHINFO(state, searchInfo) {
    state.searchInfo = searchInfo
  }
}
const actions = {
  async getGoodsListInfo({
    commit
  }, searchParams) {
    const result = await reqSearchInfo(searchParams)
    if (result.code === 200) {
      commit('RECEIVE_SEARCHINFO', result.data)
    }
  }
}
const getters = {
    //数据处理
    attrsList(state){
        return state.searchInfo.attrsList || []
    },
    goodsList(state){
        return state.searchInfo.goodsList || []
    },
    trademarkList(state){
        return state.searchInfo.trademarkList || []
    }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
