<template>
    <div class="redirect">
        <div @click="pushRoute('intoAccount')">1.提现</div>
        <div @click="pushRoute('Certification')">2.提现去认证入口</div>
        <div @click="pushRoute('showMobile')">3.测试跳转到显示手机号码页面</div>
        <div @click="pushRoute('identifyReview')">4.测试跳转到认证审核中</div>
        <div @click="pushRoute('identifySucc')">5.测试跳转到认证审核完成</div>
        <div @click="pushRoute('tixianGoIdentify')">6.测试跳转到提现转实名认证</div>
    </div>
</template>
<script>
    export default {
        methods: {
            pushRoute(param) {
                this.$router.push("" + param + "");
            }
        }
    }
</script>
<style lang="less" scoped>
    .redirect{
        div{
            width:100%;
            height:.8rem;
            line-height: .8rem;
            color: #fff;
            font-size: .4rem;
            text-align: center;
            background-color: #fc8d00;
            margin-top: .4rem;
        }
    }
</style>
