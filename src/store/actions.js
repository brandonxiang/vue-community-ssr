import axios from 'axios'

export const changeTabValue = ({ commit },val) =>  commit('changeTabValue',val);

export const getTopic = ({commit, state}, page) => {
    axios.get(`https://www.vue-js.com/api/v1/topics?tab=${state.tab}&page=${page}`)
    .then(res=>{
        if (res.status == 200) {
            commit('SET_TOPIC', res.data.data)
        }
    })
}
