import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'

import store from '@/store/index/index'
import router from '@/router/index'
import Home from './Home.vue'
import $ from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//require('es6-promise').polyfill() 需要评估是否需要

//加载vuex和router
Vue.use(VueRouter)
Vue.use(Vuex)

FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    // store,
    render: h => h(Home)
}).$mount('#app')
