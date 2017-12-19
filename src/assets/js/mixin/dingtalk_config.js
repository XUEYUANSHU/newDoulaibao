import Vue from 'vue'
import axios from '@/api/axios'
import api from '@/api/base.api'

import {
    AlertPlugin,
    ToastPlugin
} from 'vux'
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
/**
 * router.beforeEach((to, from, next) => {
 *  //判断是否鉴权
 *          //已鉴权 通过store中true
 *                  //是否session  进入页面next
 *
 *
 *          //没有鉴权 通过store中false
 *          获得签名包 请求config {
 *                      //成功 设置store中true
 *                      //失败 设置store中flse 重新进行鉴权
 *
 *                  }
 *
 *

  } else {
    next() // 确保一定要调用 next()
  }
})
 */
export default {
    created() {
        console.log(123);
        this.getPackage().then(rtn => {
            //rtn判断
            console.log('获取签名包', rtn);
            this.setConfig(rtn);
        })
    },
    methods: {
        getPackage() {
            return axios.get(api.getConfig);
        },
        setConfig(data) {
            var rtn = data;
            var _this = this;
            dd.config({
                agentId: rtn.agentid, // 服务端传来的congfig信息
                corpId: rtn.corpId,
                timeStamp: rtn.timeStamp,
                nonceStr: rtn.nonceStr,
                signature: rtn.signature,
                jsApiList: [ // 所有需要使用到的jsApi需要在config的时候进行注册，写在这里。
                    'runtime.info',
                    'dd.device',
                    // 'util.domainStorage.setItem',
                    // 'util.domainStorage.getItem',
                    'device.geolocation.get',
                    'biz.map.locate',
                    'biz.map.view',
                    'biz.chat.pickConversation',
                    'biz.chat.chooseConversationByCorpId',
                    'biz.chat.openSingleChat',
                    'biz.ding.create',
                    'biz.telephone.call'

                ]
            });
            dd.ready(function () {
                _this.$vux.toast.text('鉴权成功');
                //判断是否有sessionId
                // if (this.$store.state.sessionId != '') {
                //     window.location.href = "./index.html#/";
                // } else {
                dd.runtime.permission.requestAuthCode({
                    corpId: api.corpid,
                    onSuccess: function (result) {
                        console.log(result.code);
                        _this.mobileLogin(result.code);
                        _this.$store.dispatch('changeSessionId', result.code);
                        // alert(JSON.stringify(result));
                    },
                    onFail: function (err) {
                        alert(JSON.stringify(err))
                    }
                });
                return;
                dd.runtime.info({
                    onSuccess: function (info) {
                        alert('runtime info: ' + JSON.stringify(info));
                        alert('成功了');
                    },
                    onFail: function (err) {
                        alert('fail: ' + JSON.stringify(err));
                    }
                });
                // }
            });
            dd.error(function (error) {
                //alert('dd error: ' + JSON.stringify(error));
                _this.$vux.alert.show({
                    title: '错误',
                    content: `钉钉鉴权失败:${JSON.stringify(error)}`
                })
            });

        },
        mobileLogin(code) {
            //console.warn(123);
            // axios.post(api.mobileLogin, {
            //     mobileLogin: true,
            //     dingCode: code
            // }).then((response) => {
            //     console.log(response);
            //     //this.$store.dispatch('changeSessionId',response );


            // }).catch(rtn => {
            //     console.warn(rtn);
            // });
        },
    },

}
