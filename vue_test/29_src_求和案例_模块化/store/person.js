import { nanoid } from "nanoid"
//人员管理相关配置
export default {
    namespaced: true,
    actions: {
        addPersonByServe(context) {
            context.commit('ADD_PERSON', {id: nanoid(), name: '赵六'})
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.persons.push(value) 
        }
    },
    state: {
        sum: 99,
        persons: [
            {id: '001', name: '张三'}
        ]
    },
    getters: {

    }
}