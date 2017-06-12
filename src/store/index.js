import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const path_title_array = [
  ['/', 'Vue.js 中文社区'],
  ['/publish', '发布'],
  ['/messages', '消息中心'],
  ['/person', '个人中心'],
  ['/content', '阅读帖子'],
  ['/login', '登录'],
  ['/user', '用户信息']
];



export function createStore() {
  return new Vuex.Store({
    state: {
      topics:{
        all:[],
        good: [],
        weex:[],
        share: [],
        ask: [],
        job: [],
      },
      tab: 'all',
      // titles: ['Vue.js 中文社区', '发布话题', '消息中心', '个人中心'],
      titleMap: new Map(path_title_array),
      tabValue: '首页'
    }, 
    mutations,
    actions,
    getters
  })
}
