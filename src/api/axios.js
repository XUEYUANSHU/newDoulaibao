import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
// import api from '@/api/setting.api'

axios.defaults.timeout = 60000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization') || '';
//参考问题：https://segmentfault.com/q/1010000008209308/a-1020000008211227
/*
这里可以设置统一请求前缀
axios.defaults.baseURL = 'http://192.168.0.206:9028';
 */

//请求发出拦截器
import {
    LoadingPlugin
} from 'vux'
Vue.use(LoadingPlugin)

var loading = '';
axios.interceptors.request.use(
    config => {
        //初始化post参数
        // loading = Vue.$vux.loading.show({
        //     text: '正在加载'
        // })
        if (config.method === 'post' || config.method === 'put') {
            config.data = qs.stringify(config.data);
        }
        return config;
    },
    error => {
        Message.error({
            message: '参数错误'
        })
        return Promise.reject(error);
    });

//请求响应拦截器
axios.interceptors.response.use(
    res => {
        Vue.$vux.loading.hide();

        if (res.status === 200) {
            return res.data;
        } else {

        }
    },
    error => {
        //这里屏蔽掉promise的错误返回值，否则前端axios不做catch处理时控制台会出错！
        if (error.response.status == 500) {
            console.log('');
        } else {
            console.log('');
        }
        return Promise.reject(error);
    });

export default axios;
