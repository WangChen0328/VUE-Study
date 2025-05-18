//该文件用于创建最为核心的store

//引入Vue
import Vue from "vue"
//引入Vuex
import Vuex from 'vuex'
//引入配置
import countOptions from './count'
import personOptions from './person'

Vue.use(Vuex)


//创建并暴露store
// eslint-disable-next-line no-unused-vars
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})