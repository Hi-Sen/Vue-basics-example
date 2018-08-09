

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

 // 创建一个store仓库
 const store  = new Vuex.Store({
    //  声明 共享状态值
    state:{
        count:0
    },

    // 定义获取 state，getters 对象
    getters: {
        getCount: state => {
            return state.count
        }
    },

    // 定义唯一修改 state 的途径
    mutations: {
        add (state) {
            state.count++
        },
        jian (state) {
            state.count--
        }
    },

    // actions 异步 修改 state , 其实是提交一个 mutations 
    actions: {
        addAction (context) {
            context.commit('add')
        },
        jianAction (context) {
            context.commit('jian')
        }
    }
    
 })

 export default store;