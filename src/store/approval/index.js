import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex);


// 定义vuex
const state = {
    bigTrcM: 0,
    flowTrcM: 0,
    hotelM: 0,
    rentalCarM: 0

}

var store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store;
