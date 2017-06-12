export default {
  ['changeTabValue'](state,val){
    state.tabValue = val;
  },

  ['SET_TOPIC'](state, val){
      state.topics[state.tab] = val;
  }
}