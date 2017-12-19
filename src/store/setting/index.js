import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex);


// 定义vuex
const state = {
    sessionId: ''

}


var store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store;
