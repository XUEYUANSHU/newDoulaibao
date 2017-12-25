<template>
    <div>
        <commonHeader url="-1" title="绑定银行卡"/>
        <div class="identify" v-if="!identify">
            <div class="text">
                <p>请您完成实名认证后, 再添加</p>
                <p>银行卡哦</p>
            </div>
            <div class="goIdentify" @click="go()">前去实名认证</div>
        </div>
        <div class="bankInfo" v-if="identify">
            <div class="spacing"></div>
            <div>
                <div class="infoList">
                    <span class="left">持卡人</span><span class="right">{{user.realName}}</span>
                </div>
                <div class="infoList">
                    <span class="left">身份证号码</span><span class="right">{{user.idCardNumber}}</span>
                </div>
                <div class="infoList">
                    <span class="left">银行卡号</span><input v-on:input="NUmberClear('bankCode')" v-model="bankCode"
                                                         class="right" placeholder="请输入银行卡号">
                </div>
                <div class="spacingText">填写银行预留手机号</div>
                <div class="infoList">
                    <span class="left">手机号</span><input v-model="mobile" v-on:input="NUmberClear('mobile')"
                                                        class="mobile" placeholder="请输入手机号">
                </div>
                <div class="infoList code">
                    <input v-model="code" v-on:input="NUmberClear('code')" class="left text-left" placeholder="请输入验证码">
                    <div @click="sendCode()" class="right yellow">{{hasSendCode ? '请输入验证码' : '点击获取验证码'}}</div>
                </div>
            </div>
            <div class="submit" @click="submit()">提交</div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    // import axios from '@/api/my-axios.js'
    import api from "@/api/index.api";
    import commonHeader from "@/components/Header.vue";

    export default {
        components: {
            commonHeader
        },
        data() {
            return {
                user: {},
                identify: true,
                bankCode: "",
                mobile: "",
                code: "",
                hasSendCode: false
            };
        },
        methods: {
            go() {
                this.$router.push("userProfile");
            },
            sendCode() {
                let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                if (!this.mobile) {
                    alert("请输入手机号码！");
                    return false;
                }
                if (!myreg.test(this.mobile)) {
                    alert("请输入有效的手机号码！");
                    return false;
                } else {
                    axios({
                        method: "POST",
                        url: api.sms,
                        data: {
                            mobile: this.mobile
                        }
                    })
                        .then(res => {
                            if (res.data) {
                                alert("验证码以发送, 请注意查收");
                                this.hasSendCode = true;
                            }
                        })
                        .catch(rtn => {
                            console.log(rtn);
                        });
                    console.log("验证码");
                }
            },
            NUmberClear(type, e) {
                console.log("this", this, "type", type);
                this[type] = this[type].replace(/[^\d.]/g, "");
                console.log("this[type]", this[type]);
            },
            //绑定成功跳转
            submit() {
                let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                if (!this.bankCode) {
                    alert("请输入银行卡号！");
                    return false;
                }
                if (this.bankCode.length < 14) {
                    alert("请输入正确的银行卡号！");
                    return false;
                }

                if (!this.mobile) {
                    alert("请输入手机号码！");
                    return false;
                }
                if (!myreg.test(this.mobile)) {
                    alert("请输入有效的手机号码！");
                    return false;
                }
                if (this.hasSendCode) {
                    alert("请点击获取验证码！");
                    return false;
                }
                if (!this.code) {
                    alert("请输入验证码！");
                    return false;
                }
                console.log("提交");
                axios({
                    method: "POST",
                    url: api.bindbankcard,
                    data: {
                        userId: this.user.id,
                        bankCode: this.bankCode,
                        mobile: this.mobile,
                        code: this.code
                    }
                })
                    .then(res => {
                        console.log("绑定银行卡的信息", res);
                        if (res.code == 200) {
                            this.$router.push("binBankSucc");
                        } else {
                            alert(res.message);
                            this.$router.push("binBankSucc");
                        }

                        console.log(this.user, "绑定银行卡的信息", res.data);
                    })
                    .catch(rtn => {
                        console.log(rtn);
                    });
            }
        },
        mounted() {
            axios({
                method: "POST",
                url: api.checkIdentity,
                data: {
                    userId: 1
                }
            })
                .then(res => {
                    console.log(this.identify, "是否实名认证", res.data);
                    if (res.code == 200) {
                        this.identify = true;
                    } else {
                        this.identify = false;
                    }
                    if (this.identify) {
                        axios({
                            method: "POST",
                            url: api.userDetail,
                            data: {
                                userId: 1
                            }
                        })
                            .then(res => {
                                this.user = Object.assign({}, res.data);
                                console.log(this.user, "用户详情", res.data);
                            })
                            .catch(rtn => {
                                console.log(rtn);
                            });
                    }
                })
                .catch(rtn => {
                    console.log(rtn);
                });
        }
    };
</script>
<style lang="less" scoped>
    .identify {
        .text {
            text-align: center;
            color: #333333;
            font-size: 0.36rem;
            padding: 1.16rem 0.96rem;
        }
        .goIdentify {
            width: 5.6rem;
            height: 0.72rem;
            margin: 0 auto;
            line-height: 0.72rem;
            text-align: center;
            color: #ffffff;
            border-radius: 0.08rem;
            background: #fc8d00;
        }
    }

    .bankInfo {
        .spacing {
            height: 0.2rem;
            background: #efefef;
        }
        .infoList {
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 0.82rem;
            padding: 0.12rem 0.48rem;
            font-size: 0.24rem;
            color: #323232;
            border-bottom: 1px solid #efefef;
            .left {
            }
            .right {
            }
            input {
                border: none;
                background: none;
                outline: none;
                text-align: right;
            }
            .text-left {
                text-align: left;
            }
        }
        .code {
            padding: 0 0.48rem;
            .yellow {
                width: 2.18rem;
                line-height: 0.82rem;
                color: #ffffff;
                font-size: 0.28rem;
                border-radius: 0.04rem;
                text-align: center;
                background-color: #fc8d00;
            }
        }
        .spacingText {
            padding: 0 0.48rem;
            height: 0.64rem;
            line-height: 0.64rem;
            font-size: 0.24rem;
            color: #6b6b6b;
            background: #efefef;
        }
        .submit {
            width: 6.06rem;
            height: 0.84rem;
            margin: 0.48rem auto 0 auto;
            line-height: 0.84rem;
            text-align: center;
            color: #ffffff;
            font-size: 0.32rem;
            border-radius: 0.08rem;
            background-color: #fc8d00;
        }
    }
</style>
