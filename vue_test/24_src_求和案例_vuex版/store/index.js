//该文件用于创建最为核心的store

//引入Vue
import Vue from "vue"

//引入Vuex
import Vuex from 'vuex'

Vue.use(Vuex)

//准备actions--用于响应组件中的动作 , service
// eslint-disable-next-line no-unused-vars
const actions = {
    // add(context, value) {
    //     context.commit('ADD', value)
    // },
    // minus(context, value) {
    //     context.commit('MINUS', value)
    // },
    addOdd(context, value) {
        if(context.state.sum % 2) {
            context.commit('ADD', value)
        }
    },
    addWait(context, value) {
        setTimeout(() => {
            context.commit('ADD', value)
        }, 500)
    }
}

//准备mutations--用于操作数据(state) , dao
// eslint-disable-next-line no-unused-vars
const mutations = {
    ADD(state, value) {
        state.sum += value
    },
    MINUS(state, value) {
        state.sum -= value
    }
}

//准备state--存储数据
// eslint-disable-next-line no-unused-vars
const state = {
    sum: 0
}

//创建并暴露store
// eslint-disable-next-line no-unused-vars
export default new Vuex.Store({
    actions,
    mutations,
    state
})